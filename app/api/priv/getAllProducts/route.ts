import * as redis from "redis";
import { NextRequest, NextResponse } from "next/server";

import { getAllUSLocations } from "../../../../lib/taco-bell/locations";
import type { TacoBellPricesCategory } from "../../../../lib/taco-bell-prices/types";

const client = redis.createClient()

export async function POST(request: NextRequest) {
  if(process.env.GET_PRODUCTS_TOKEN.length > 0) {
    const token = request.headers.get("token");
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (token !== process.env.GET_PRODUCTS_TOKEN) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  } else {
    console.warn("WARN: GET_PRODUCTS_TOKEN is not set in .env. Anyone can make a post request to /api/priv/getAllProducts to generate the averagePrices.json file. This is probably not a good idea!!!")
  }

  console.log("Begin getting average prices")
  console.log("Getting list of all US locations...")

  const cacheKey = "allProducts";

  getAllUSLocations().then(async (locations) => {
    console.log("Getting prices from each location...")
    const products: { code: string, name: string, priceList: number[] }[] = []

    const minMaxMap: { [key: string]: { min: { price: number, storeID: string }, max: { price: number, storeID: string } } } = {}

    for(let location of locations) {
      // These locations are present on the locations database, but don't have an online menu, presumably because they are small, rural locations.
      if(location.match(/[A-Z]/)) continue

      const response = await fetch(`http://127.0.0.1:3000/api/products?storeID=${location}`)
      
      // We try not to overwhelm Taco Bell with requests, but in case we do...
      if(!response.ok) continue
      
      const json: TacoBellPricesCategory[] = await response.json()

      for(let category of json) {
        for(let product of category.products) {
          if(!product.purchasable) continue;

          const existingProduct = products.find(p => p.code === product.code)
          if(existingProduct) {
            existingProduct.priceList.push(product.price.value)
          } else {
            products.push({
              code: product.code,
              name: product.name,
              priceList: [product.price.value],
            })
          }

          const existingMinMax = minMaxMap[product.code]
          if(existingMinMax) {
            if(existingMinMax.min.price > product.price.value) {
              existingMinMax.min.price = product.price.value
              existingMinMax.min.storeID = location
            }
            if(existingMinMax.max.price < product.price.value) {
              existingMinMax.max.price = product.price.value
              existingMinMax.max.storeID = location
            }
          } else {
            minMaxMap[product.code] = {
              min: {
                price: product.price.value,
                storeID: location,
              },
              max: {
                price: product.price.value,
                storeID: location,
              },
            }
          }
        }
      }
    }

    const averagePrices = products.map(product => {
      return {
        code: product.code,
        name: product.name,
        minLocation: minMaxMap[product.code].min.storeID,
        maxLocation: minMaxMap[product.code].max.storeID,
        price: {
          average: product.priceList.reduce((a, b) => a + b, 0) / product.priceList.length,
          min: Math.min(...product.priceList),
          max: Math.max(...product.priceList),
          stddev: Math.sqrt(product.priceList.map(x => Math.pow(x - product.priceList.reduce((a, b) => a + b, 0) / product.priceList.length, 2)).reduce((a, b) => a + b, 0) / product.priceList.length),
        },
      }
    })

    console.log("Writing data to cache...");

    await client.connect();
    await client.set(cacheKey, JSON.stringify(averagePrices));
    console.log("Done!");
    await client.disconnect();
    console.log("Output: ")

    const metadata = {
      datetime: new Date().toISOString(),
      numLocations: locations.length,
      numProducts: products.length,
    }
    const output = { metadata, averagePrices, locations };
    console.log(JSON.stringify(output, null, 2))
  });

  return NextResponse.json({ message: "Accepted" }, { status: 202 });
}
