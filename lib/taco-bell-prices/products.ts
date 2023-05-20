import { readFile } from "fs/promises"

export const getAveragePrices = async () => {
  try {
    const averagePrices = JSON.parse(await readFile("./averagePrices.json", "utf-8"))
    return averagePrices
  } catch (err) {
    console.warn("WARN: You have not generated the averagePrices.json file! Make a post request to /api/priv/getAllProducts setting the \"token\" header to GET_PRODUCTS_TOKEN from .env to generate it.")
    return []
  }
}