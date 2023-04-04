import { parseDocument, DomUtils } from "htmlparser2";
import semaphore from "semaphore";

const sema = semaphore(4)

const tmp = parseDocument("")
type HTMLParser2Document = typeof tmp

const STATES = ['al', 'ak', 'az', 'ar', 'ca', 'co', 'ct', 'de', 'fl', 'ga', 'hi', 'id', 'il', 'in', 'ia', 'ks', 'ky', 'la', 'me', 'md', 'ma', 'mi', 'mn', 'ms', 'mo', 'mt', 'ne', 'nv', 'nh', 'nj', 'nm', 'ny', 'nc', 'nd', 'oh', 'ok', 'or', 'pa', 'ri', 'sc', 'sd', 'tn', 'tx', 'ut', 'vt', 'va', 'wa', 'wv', 'wi', 'wy']

const getDocFromUrl = async (url: string) => {
  const prom = new Promise<HTMLParser2Document>((res, rej) => {
    sema.take(() => {
      fetch(url).then((response) => {
        response.text().then((text) => {
          console.log("URL: " + url)
          const doc = parseDocument(text)
          sema.leave()
          res(doc)
        }).catch((err) => {
          console.log(err)
          sema.leave()
          rej(err)
        })
      }).catch((err) => {
        console.log(err)
        sema.leave()
        rej(err)
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
  const prom = new Promise<string[]>((res, rej) => {
    const locations: string[] = []
    const everything: Promise<void>[] = [];
    for (const state of STATES) {
      everything.push(getDocFromUrl(`https://locations.tacobell.com/${state}.html`).then((doc) => new Promise((res2, rej2) => {
        const everything2: Promise<void>[] = [];
        const locationElements = DomUtils.findAll((node) => DomUtils.getAttributeValue(node, 'class') === 'Directory-listLink', doc.childNodes)
        for(let i = 0; i < locationElements.length; i++) {
          const city = locationElements[i]
          const cityUrl = city.attributes.find((attr: any) => attr.name === "href").value
          everything2.push(getDocFromUrl(`https://locations.tacobell.com/${cityUrl}`).then((cityDoc) => new Promise((res3, rej3) => {
            const directoryLevel = cityUrl.split("/").length
            if(directoryLevel == 3) {
              locations.push(getStoreIDFromWebsite(cityDoc))
              res3()
            } else {
              const everything3: Promise<void>[] = [];
              const cityLocationElements = DomUtils.findAll((node) => DomUtils.getAttributeValue(node, 'class') === 'Directory-listLink', cityDoc.childNodes)
              for(let j = 0; j < cityLocationElements.length; j++) {
                const cityLocation = cityLocationElements[j]
                const cityLocationUrl = cityLocation.attributes.find((attr: any) => attr.name === "href").value
                everything3.push(getDocFromUrl(`https://locations.tacobell.com/${cityLocationUrl}`).then((cityLocationDoc) => {
                  locations.push(getStoreIDFromWebsite(cityLocationDoc))
                }))
              }

              Promise.all(everything3).then(() => {
                res3()
              }).catch((err) => {
                rej3(err)
              })
            }
          })))
        }

        Promise.all(everything2).then(() => {
          res2()
        }).catch((err) => {
          rej2(err)
        })
      })))
    }

    Promise.all(everything).then(() => {
      res(locations)
    }).catch((err) => {
      rej(err)
    })
  })

  return prom;
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