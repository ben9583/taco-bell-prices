'use client';

import styles from './page.module.css'

import { KeyboardEventHandler, useState } from 'react';
import LoadingSVG from '../assets/loading.svg';
import TacoBellStoreBox from '../components/TacoBellStoreBox';
import Image from 'next/image';
import type { TacoBellPricesLocation, TacoBellPricesStores } from '../lib/taco-bell-prices/types';

export default function Page() {
  const [storesInput, setStoresInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [stores, setStores] = useState<TacoBellPricesStores>({
    latitude: 0,
    longitude: 0,
    nearByStores: []
  })

  const getStores = async () => {
    setLoading(true);
    setStores({latitude: 0, longitude: 0, nearByStores: []})
    const prom = new Promise((resolve, reject) => {
      fetch(`/api/locate?location=${storesInput}`).then(res => {
        if (res.status !== 200) {
          setLoading(false);
          reject(res);
          return;
        }

        res.json().then((data: TacoBellPricesLocation) => {
          fetch(`/api/findStores?lat=${data.geometry.lat}&lng=${data.geometry.lng}`).then(res2 => {
            if (res2.status !== 200) {
              setLoading(false);
              reject(res);
              return;
            }

            res2.json().then((data2: TacoBellPricesStores) => {
              setLoading(false);
              setStores(data2);
              resolve(undefined);
            });
          });
        });
      })
    });

    return prom;
  };

  const onEnterPressed: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if(e.key === "Enter") {
      console.log(e)
      getStores();
    }
  }

  return (
    <main className={styles.content}>
      <h1 className={styles.title}>Taco Bell Price Comparer</h1>
      <p className={styles.description}>Compare the prices of Taco Bell items across the country.</p>

      <div className={styles.searchUtility}>
        <input type="text" className={styles.input} placeholder="Search by address, city, or zip" onChange={e => setStoresInput(e.target.value)} value={storesInput} onKeyDown={onEnterPressed} />
        <button className={styles.button} onClick={getStores}>Search</button>
      </div>

      {loading && <Image className={styles.loadingImage} width={64} height={64} src={LoadingSVG} alt="loading..." />}
      <div className={styles.storesContainer}>
        {stores.nearByStores.map(store => <TacoBellStoreBox store={store} key={Number(store.formattedDistance.split(" ")[0]) + Math.random() * 0.00001} />)}
      </div>
    </main>
  )
}
