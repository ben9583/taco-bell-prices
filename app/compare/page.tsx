import styles from './page.module.css'

import { Fragment } from 'react';
import { notFound } from "next/navigation"
import { TacoBellPricesCategory } from '../../lib/taco-bell-prices/types';

interface PricesItemsComparison {
  category: string;
  products: {
    name: string;
    prices: number[];
    formattedPrices: string[];
  }[];
};

export default async function Page(props: { params: {}, searchParams: { stores?: string }}) {
  if(!props.searchParams.stores) {
    notFound();
  }

  const stores = props.searchParams.stores.split(",");
  const products: TacoBellPricesCategory[][] = [];

  for(let id of stores) {
    if(!id) {
      notFound();
    }

    const res = await fetch(`http://127.0.0.1:3000/api/products?storeID=${id}`, { next: { revalidate: 86400 }});
    if(res.status !== 200) {
      console.log(id)
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

  const productsComparison: PricesItemsComparison[] = [];

  for(let storeIdx = 0; storeIdx < products.length; storeIdx++) {
    for(let catIdx = 0; catIdx < products[storeIdx].length; catIdx++) {
      const category = products[storeIdx][catIdx];

      let foundCategory = productsComparison.find(p => p.category === category.name);
      if(!foundCategory) {
        foundCategory = {
          category: category.name,
          products: []
        };
        productsComparison.push(foundCategory);
      }

      for(let prodIdx = 0; prodIdx < products[storeIdx][catIdx].products.length; prodIdx++) {
        const product = products[storeIdx][catIdx].products[prodIdx];

        let foundProduct = foundCategory.products.find(p => p.name === product.name);
        if(!foundProduct) {
          foundProduct = {
            name: product.name,
            prices: [],
            formattedPrices: []
          };
          
          foundCategory.products.push(foundProduct);
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

  for(let catIdx = 0; catIdx < productsComparison.length; catIdx++) {
    for(let prodIdx = 0; prodIdx < productsComparison[catIdx].products.length; prodIdx++) {
      for(let i = productsComparison[catIdx].products[prodIdx].prices.length; i < stores.length; i++) {
        productsComparison[catIdx].products[prodIdx].prices.push(NaN);
        productsComparison[catIdx].products[prodIdx].formattedPrices.push("N/A");
      }
    }
  }

  console.log(productsComparison[0].products[0].prices)

  return (
    <div style={{display: "grid", gridTemplateColumns: stores.map(_ => "auto").join(" ") + " auto"}}>
      <div></div>
      {stores.map((store, storeIdx) => (
        <div key={storeIdx}>
          <h1>{store}</h1>
        </div>
      ))}
      {productsComparison.map((cat, catIdx) => (
        <Fragment key={catIdx}>
          <div key={catIdx}>
            <h2>{cat.category}</h2>
          </div>
          {stores.map((_, i) => <div key={i}></div>)}
          {cat.products.map((prod, prodIdx) => (
            <Fragment key={prodIdx}>
              <div key={prodIdx}>
                <h3>{prod.name}</h3>
              </div>
              {prod.formattedPrices.map((price, priceIdx) => (
                <div key={priceIdx}>
                  <p>{price}</p>
                </div>
              ))}
            </Fragment>
          ))}
        </Fragment>
      ))}
    </div>
  )
}