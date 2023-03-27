'use client';

import styles from './page.module.css'

import { useState } from 'react';
import TacoBellStoreBox from '../components/TacoBellStoreBox';
import type { TacoBellPricesLocation, TacoBellPricesStores } from '../lib/taco-bell-prices/types';

export default function Page() {
  const [storesInput, setStoresInput] = useState('')
  const [stores, setStores] = useState<TacoBellPricesStores>({
    latitude: 0,
    longitude: 0,
    nearByStores: []
  })

  const getStores = async () => {
    const prom = new Promise((resolve, reject) => {
      fetch(`/api/locate?location=${storesInput}`).then(res => {
        if (res.status !== 200) {
          reject(res);
          return;
        }

        res.json().then((data: TacoBellPricesLocation) => {
          fetch(`/api/findStores?lat=${data.geometry.lat}&lng=${data.geometry.lng}`).then(res2 => {
            if (res2.status !== 200) {
              reject(res);
              return;
            }

            res2.json().then((data2: TacoBellPricesStores) => {
              setStores(data2);
              resolve(undefined);
            });
          });
        });
      })
    });

    return prom;
  };

  return (
    <main className={styles.content}>
      <h1 className={styles.title}>Taco Bell Price Comparer</h1>
      <p className={styles.description}>Compare the prices of Taco Bell items across the country.</p>

      <div className={styles.searchUtility}>
        <input type="text" className={styles.input} placeholder="Search by address, city, or zip" onChange={e => setStoresInput(e.target.value)} value={storesInput} />
        <button className={styles.button} onClick={getStores}>Search</button>
      </div>

      <div className={styles.storesContainer}>
        {stores.nearByStores.map(store => <TacoBellStoreBox store={store} key={Number(store.formattedDistance.split(" ")[0]) + Math.random() * 0.00001} />)}
      </div>
    </main>
  )
}
