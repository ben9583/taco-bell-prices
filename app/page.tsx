import styles from './page.module.css'

export default function Page() {
  return (
    <main className={styles.content}>
      <h1 className={styles.title}>Taco Bell Price Comparer</h1>
      <p className={styles.description}>Compare the prices of Taco Bell items across the country.</p>

      <div className={styles.searchUtility}>
        <input className={styles.input} placeholder="Search by address, city, or zip"></input>
        <button className={styles.button}>Search</button>
      </div>
    </main>
  )
}
