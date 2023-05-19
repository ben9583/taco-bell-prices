import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

import { getAllUSLocations } from "../../../../lib/taco-bell/locations";
import type { TacoBellPricesCategory } from "../../../../lib/taco-bell-prices/types";

export function POST(request: NextRequest) {
  const token = request.headers.get("token");
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (token !== "33d7c5a7-e40b-4ece-b2fd-01b315b2320b") { // Ok not the most secure but this is a simple way to do it and it doesn't really matter
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  console.log("Begin getting average prices")
  console.log("Getting list of all US locations...")

  getAllUSLocations().then(async (locations) => {
    console.log("Getting prices from each location...")
    const products: { code: string, name: string, cumulativePrice: number, amount: number }[] = []

    for(let location of locations) {
      // These locations are present on the locations database, but don't have an online menu, presumably because they are small, rural locations.
      if(location.match(/[A-Z]/)) continue

      const response = await fetch(`http://127.0.0.1:3000/api/products?storeID=${location}`)
      
      // We try not to overwhelm Taco Bell with requests, but in case we do...
      if(!response.ok) continue
      
      const json: TacoBellPricesCategory[] = await response.json()

      for(let category of json) {
        for(let product of category.products) {
          const existingProduct = products.find(p => p.code === product.code)
          if(existingProduct) {
            existingProduct.cumulativePrice += product.price.value
            existingProduct.amount++
          } else {
            products.push({ code: product.code, name: product.name, cumulativePrice: product.price.value, amount: 1 })
          }
        }
      }
      
    }

    console.log("Averaging over all prices...")
    console.log(products.length)

    const averagePrices = products.map(product => {
      return {
        code: product.code,
        name: product.name,
        averagePrice: product.cumulativePrice / product.amount
      }
    })

    writeFile("./averagePrices.json", JSON.stringify(averagePrices)).then(() => console.log("Done!"))
  })

  return NextResponse.json({ message: "Accepted" }, { status: 202 });

}

export function GET(request: NextRequest) {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}