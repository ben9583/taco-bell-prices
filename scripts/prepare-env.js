const { readFileSync, writeFileSync } = require("fs");
const { v4 } = require("uuid");

const env = readFileSync(".env.template").toString();
const envVars = env.split("\n");

if(readFileSync(".env").toString()) {
  console.log("An .env file already exists. No changes have been made.")
  return;
}

const envFile = envVars.reduce((acc, envVar) => {
  const [key, value] = envVar.split("=");

  if(key === "") return acc;
  acc[key] = value;
  if(value !== "") return acc;

  switch (key) {
    case "GET_PRODUCTS_TOKEN":
      console.log("A random UUID has been generated for GET_PRODUCTS_TOKEN. Please check .env to use it.")
      acc[key] = v4();
      break;
    default:
      console.warn(`WARN: No handler for ${key}, defaulting to blank`)
      break;
  }
  return acc;
}, {});

const envFileString = Object.entries(envFile).reduce((acc, [key, value]) => {
  return `${acc}${key}=${value}\n`;
}, "");

writeFileSync(".env", envFileString);
console.log("Generated .env file.")
