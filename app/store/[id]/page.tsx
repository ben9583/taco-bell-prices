import styles from './page.module.css'

import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { TacoBellPricesCategoryWithPriceStats } from '../../../lib/taco-bell-prices/types';

export default async function Page({ params }) {
  const { id } = params;

  if(!id) { 
    notFound();
  }

  const res = await fetch(`http://127.0.0.1:3000/api/products?storeID=${id}`);
  if(res.status !== 200) {
    notFound();
  }

  const products: TacoBellPricesCategoryWithPriceStats[] = await res.json();

  if(products[0].code === "TacoLoversPass") {
    products.splice(0, 1);
  }

  const sigmoid = (x: number) => 1 / (1 + Math.exp(-2*x));

  const res2 = await fetch(`http://127.0.0.1:3000/api/getAllProducts`);
  if(res2.ok) {
    const allProducts: { code: string, name: string, price: { average: number, min: number, max: number, stddev: number } }[] = await res2.json();
    products.map(category => {
      category.products.map(product => {
        const foundProduct = allProducts.find(p => p.code === product.code);
        if(foundProduct) {
          console.log(foundProduct)
          product.priceStats = foundProduct.price;
          console.log("a")
        }
      })
    })
  }

  return (
    <div className={styles.productsContainer}>
      {products.map(category => (
        <div className={styles.categoryContainer} key={category.name}>
          <h2>{category.name}</h2>
          <div className={styles.products}>
            {category.products.map(product => (
              <div className={styles.product} key={product.name} style={{backgroundColor: product.priceStats ? `hsl(${120 * sigmoid((product.priceStats.average - product.price.value) / (product.priceStats.stddev || 0.01))}, 100%, 33%)` : ''}}>
                <h3>{product.name}</h3>
                <p>{product.price.formattedValue}</p>
                <Image src={product.images[0]} width={200} height={200} alt="image" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}