import styles from './page.module.css'

import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { TacoBellPricesCategory } from '../../../lib/taco-bell-prices/types';

export default async function Page({ params }) {
  const { id } = params;

  if(!id) { 
    notFound();
  }

  const res = await fetch(`http://127.0.0.1:3000/api/products?storeID=${id}`, { next: { revalidate: 86400 }});
  if(res.status !== 200) {
    notFound();
  }

  const products: TacoBellPricesCategory[] = await res.json();

  if(products[0].code === "TacoLoversPass") {
    products.splice(0, 1);
  }

  console.log(products[0].products[0].images)

  return (
    <div className={styles.productsContainer}>
      {products.map(category => (
        <div className={styles.categoryContainer} key={category.name}>
          <h2>{category.name}</h2>
          <div className={styles.products}>
            {category.products.map(product => (
              <div className={styles.product} key={product.name}>
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