import { readFile } from "fs/promises"

export const getAveragePrices = async () => {
  const averagePrices = JSON.parse(await readFile("./averagePrices.json", "utf-8"))
  return averagePrices
}