import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <strong>Taco Bell Prices</strong> by <a href="https://ben9583.com">Ben Plate</a> and <a href="https://github.com/ben9583/taco-bell-prices/contributors/">others.</a>
          </p>
          <p>
            Copyright &copy; Ben Plate, 2023. <a href="https://github.com/ben9583/taco-bell-prices">Source code available here</a>, as stipulated by the license.
          </p>
        </div>
      </div>
    </footer>
  )
}