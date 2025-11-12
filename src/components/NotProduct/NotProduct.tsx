import styles from './NotProduct.module.scss'
import { useNavigate } from 'react-router-dom'

const NotProduct = () => {
  const navigate = useNavigate()

  const onGoToCatalog = () => {
    navigate('/')
  }

  return (
    <div className={styles['not-product']}>
      <img
        className={styles['not-product__img']}
        src="./not-carts.png"
        alt=""
        width="100"
        height="70"
      />
      <h2 className={styles['not-product__title']}>В вашей корзине пусто</h2>
      <p className={styles['not-product__text']}>
        У вас пока нет товаров в корзине. <br />
        На странице <span>"Каталог"</span> вы найдете много интересных товаров.
      </p>
      <button
        onClick={onGoToCatalog}
        className={styles['not-product__go-to-catalog']}
      >
        Перейти в главную страницу
      </button>
    </div>
  )
}

export default NotProduct
