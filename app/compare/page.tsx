import styles from './page.module.css'

import { Fragment } from 'react';
import { notFound } from "next/navigation"
import { TacoBellPricesCategory } from '../../lib/taco-bell-prices/types';

interface ItemWithPrices {
  name: string;
  prices: number[];
  formattedPrices: string[];
  priceStats: {
    average: number;
    min: number;
    max: number;
    stddev: number;
  }
};

export default async function Page(props: { params: {}, searchParams: { stores?: string }}) {
  if(!props.searchParams.stores) {
    notFound();
  }

  const stores = props.searchParams.stores.split(",");
  const products: TacoBellPricesCategory[][] = [];

  const sigmoid = (x: number) => 1 / (1 + Math.exp(-2*x));

  for(let id of stores) {
    if(!id) {
      notFound();
    }

    const res = await fetch(`http://127.0.0.1:3000/api/products?storeID=${id}`, { next: { revalidate: 86400 }});
    if(res.status !== 200) {
      notFound();
    }

    const resProducts: TacoBellPricesCategory[] = await res.json();

    products.push(resProducts);

    if(resProducts[0].code === "TacoLoversPass") {
      resProducts.splice(0, 1);
    }

    if(resProducts[0].code === "new") {
      resProducts.splice(0, 1);
    }
  }

  const res2 = await fetch(`http://127.0.0.1:3000/api/getAllProducts`);
  const averagePrices: { code: string, name: string, price: { average: number, min: number, max: number, stddev: number }}[] = res2.ok ? await res2.json() : [];

  const productsComparison: ItemWithPrices[] = [];

  for(let storeIdx = 0; storeIdx < products.length; storeIdx++) {
    const alreadyAdded: string[] = [];
    for(let catIdx = 0; catIdx < products[storeIdx].length; catIdx++) {
      for(let prodIdx = 0; prodIdx < products[storeIdx][catIdx].products.length; prodIdx++) {
        const product = products[storeIdx][catIdx].products[prodIdx];
        if(alreadyAdded.includes(product.name)) continue;
        alreadyAdded.push(product.name);
        
        let foundProduct = productsComparison.find(p => p.name === product.name);
        if(!foundProduct) {
          foundProduct = {
            name: product.name,
            prices: [],
            formattedPrices: [],
            priceStats: averagePrices.find(p => p.code === product.code)?.price ?? { average: NaN, min: NaN, max: NaN, stddev: NaN }
          };
          
          productsComparison.push(foundProduct);
        }

        for(let i = foundProduct.prices.length; i < storeIdx; i++) {
          foundProduct.prices.push(NaN);
          foundProduct.formattedPrices.push("N/A");
        }
        foundProduct.prices.push(product.price.value);
        foundProduct.formattedPrices.push(product.price.formattedValue);
      }
    }
  }

  for(let prodIdx = 0; prodIdx < productsComparison.length; prodIdx++) {
    for(let i = productsComparison[prodIdx].prices.length; i < stores.length; i++) {
      productsComparison[prodIdx].prices.push(NaN);
      productsComparison[prodIdx].formattedPrices.push("N/A");
    }
  }

  return (
    <div style={{display: "grid", gridTemplateColumns: stores.map(_ => "auto").join(" ") + " auto"}}>
      <div></div>
      {stores.map((store, storeIdx) => (
        <div key={storeIdx}>
          <h1>{store}</h1>
        </div>
      ))}
      {productsComparison.map((prod, prodIdx) => (
        <Fragment key={prodIdx}>
          <div key={prodIdx}>
            <h3>{prod.name}</h3>
          </div>
          {prod.formattedPrices.map((price, priceIdx) => (
            <div key={priceIdx} style={{backgroundColor: prod.priceStats.average ? `hsl(${120 * sigmoid((prod.priceStats.average - parseInt(price.substring(1))) / (prod.priceStats.stddev || 0.01))}, 100%, 33%)` : ''}}>
              <p>{price}</p>
            </div>
          ))}
        </Fragment>
      ))}
    </div>
  )
}