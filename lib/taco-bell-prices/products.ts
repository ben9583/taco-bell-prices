import * as redis from "redis";

const redisClient = redis.createClient();

export const getAveragePrices = async () => {
  const cacheKey = "averagePrices";
  const cachedData = await redisClient.get(cacheKey);

  if (cachedData) {
    console.log("Retrieved data from cache");
    const averagePrices = JSON.parse(cachedData);
    return averagePrices;
  } else {
    console.warn("WARN: You have not generated the averagePrices.json file! Make a post request to /api/priv/getAllProducts setting the \"token\" header to GET_PRODUCTS_TOKEN from .env to generate it.");
    return [];
  }
};