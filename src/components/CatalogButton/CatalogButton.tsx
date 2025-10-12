import styles from './CatalogButton.module.scss'

const CatalogButton = () => {
  return (
    <button className={styles['catalog-button']}>
      <span className={styles['catalog-button__left']}>
        <span className={styles['catalog-button__line']} />
        <span className={styles['catalog-button__line']} />
      </span>
      <p className={styles['catalog-button__text']}>Каталог</p>
    </button>
  )
}

export default CatalogButton
