import styles from './Header.module.scss'
const Header = () => {
  return (
    <div className={styles.header}>
        <img className={styles.header__logo} src="/logo.png"/>
    </div>
  )
}

export default Header