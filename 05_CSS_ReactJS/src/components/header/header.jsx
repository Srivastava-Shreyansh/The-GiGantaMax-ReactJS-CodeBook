import styles from './header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
      <h2>Baad me bataunga(BMB)</h2>
      <button className={styles.sub}>Subscribe</button>
    </div>
  )
}

export default Header;