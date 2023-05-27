import * as redis from "redis";

const client = redis.createClient();

export const getAveragePrices = async () => {
  const cacheKey = "allProducts";
  await client.connect()
  const cachedData = await client.get(cacheKey);
  client.disconnect();

  if (cachedData) {
    console.log("Retrieved data from cache");
    const averagePrices = JSON.parse(cachedData);
    return averagePrices;
  } else {
    console.warn("WARN: You have not generated the averagePrices.json file! Make a post request to /api/priv/getAllProducts setting the \"token\" header to GET_PRODUCTS_TOKEN from .env to generate it.");
    return [];
  }
};