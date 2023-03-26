import styles from './TacoBellStoreBox.module.css';

import React from 'react';
import { TacoBellPricesStore } from '../lib/taco-bell-prices/types';

export default function TacoBellStoreBox(props: { store: TacoBellPricesStore }) {
  const { store } = props;

  return (
    <div className={styles.storeContainer}>
      <div className={styles.details}>
        <h2>{store.address.line1 + (store.address.line2 ? + ", " + store.address.line2 : "")}</h2>
        <p>{store.address.town + ', ' + store.address.region.isocode.split("-")[1] + ' ' + store.address.postalCode}</p>
        <p>{store.formattedDistance}</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.pricesButton}>View Prices</button>
        <button className={styles.compareButton}>Add to Compare</button>
      </div>
    </div>
  );
}