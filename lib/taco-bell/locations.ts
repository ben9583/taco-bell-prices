import { parseDocument, DomUtils } from "htmlparser2";

const tmp = parseDocument("")
type HTMLParser2Document = typeof tmp

const STATES = ['al', 'ak', 'az', 'ar', 'ca', 'co', 'ct', 'de', 'fl', 'ga', 'hi', 'id', 'il', 'in', 'ia', 'ks', 'ky', 'la', 'me', 'md', 'ma', 'mi', 'mn', 'ms', 'mo', 'mt', 'ne', 'nv', 'nh', 'nj', 'nm', 'ny', 'nc', 'nd', 'oh', 'ok', 'or', 'pa', 'ri', 'sc', 'sd', 'tn', 'tx', 'ut', 'vt', 'va', 'wa', 'wv', 'wi', 'wy']

const getDocFromUrl = async (url: string) => {
  const prom = new Promise<HTMLParser2Document>((res, _) => {
    fetch(url).then((response) => {
      response.text().then((text) => {
        console.log("URL: " + url)
        const doc = parseDocument(text)
        res(doc)
      })
    })
  })

  return prom
}

const getStoreIDFromWebsite = (doc: any) => {
  const orderElement = DomUtils.findOne((node) => DomUtils.getAttributeValue(node, 'id') === 'Core' , doc.childNodes)
  const id = orderElement.attributes.find((attr: any) => attr.name === "data-code").value
  console.log(id)
  return id
}

export const getAllUSLocations = async (): Promise<string[]> => {
  const locations: string[] = []

  for (const state of STATES) {
    const stateDoc = await getDocFromUrl(`https://locations.tacobell.com/${state}.html`)
    const locationElements = DomUtils.findAll((node) => DomUtils.getAttributeValue(node, 'class') === 'Directory-listLink', stateDoc.childNodes)
    for(let i = 0; i < locationElements.length; i++) {
      const city = locationElements[i]
      const cityUrl = city.attributes.find((attr: any) => attr.name === "href").value
      const cityDoc = await getDocFromUrl(`https://locations.tacobell.com/${cityUrl}`)
      const directoryLevel = cityUrl.split("/").length
      if(directoryLevel == 3) {
        locations.push(getStoreIDFromWebsite(cityDoc))
      } else {
        const cityLocationElements = DomUtils.findAll((node) => DomUtils.getAttributeValue(node, 'class') === 'Directory-listLink', cityDoc.childNodes)
        for(let j = 0; j < cityLocationElements.length; j++) {
          const cityLocation = cityLocationElements[j]
          const cityLocationUrl = cityLocation.attributes.find((attr: any) => attr.name === "href").value
          const cityLocationDoc = await getDocFromUrl(`https://locations.tacobell.com/${cityLocationUrl}`)
          locations.push(getStoreIDFromWebsite(cityLocationDoc))
        }
      }
    }
  }

  return locations;
}

/*
getAllUSLocations().then((locations) => {
  console.log(locations)
  // Dump to file
  const fs = require('fs')
  fs.writeFile("locations.json", JSON.stringify(locations), function(err) {
    if(err) {
      return console.log(err)
    }
    console.log("Data saved to file!")
  })
}).catch((err) => {
  console.log(err)
})
*/