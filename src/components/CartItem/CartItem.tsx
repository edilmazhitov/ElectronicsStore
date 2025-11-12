import type { FC } from 'react'
import styles from './CartItem.module.scss'
import type { ICartItem, IProduct } from '@/types/productsTypes'
import {
  addCarts,
  minusOneProducts,
  removeToCart,
} from '@/store/reducers/carts.ts'
import { useAppDispatch } from '@/hooks/reduxHooks.ts'
import { FaTrash } from 'react-icons/fa'

const CartItem: FC<ICartItem> = (props) => {
  const dispatch = useAppDispatch()
  const { itemData, count } = props

  const onPlusProductCount = (item: IProduct) => {
    dispatch(addCarts(item))
  }
  const onMinusProductCount = (item: IProduct) => {
    dispatch(minusOneProducts(item))
  }

  const onDeleteProductCart = (item: IProduct) => {
    dispatch(removeToCart(item))
  }

  return (
    <>
      <div className={styles.cart}>
        <div className={styles.cart__left}>
          <img
            src={itemData.image}
            alt={itemData.title}
            className={styles.cart__img}
            width="90"
            height="90"
          />
          <div className={styles.cart__block}>
            <h2 className={styles.cart__title}>{itemData.title}</h2>
            <h3 className={styles.cart__article}>Артикул: {itemData.id}</h3>
          </div>
        </div>

        <h2 className={styles.cart__price}>
          {itemData.price.toLocaleString('ru-RU')}
          <span> сом</span>
        </h2>

        <div className={styles.cart__count}>
          <button
            className={styles['cart__count-button']}
            onClick={() => onMinusProductCount(itemData)}
          >
            -
          </button>
          <p>{count}</p>
          <button
            className={styles['cart__count-button']}
            onClick={() => onPlusProductCount(itemData)}
          >
            +
          </button>
        </div>

        <h2 className={styles.cart__price}>
          {(itemData.price * count).toLocaleString('ru-RU')}
          <span> сом</span>
        </h2>

        <button
          className={styles.cart__delete}
          onClick={() => onDeleteProductCart(itemData)}
        >
          <FaTrash />
        </button>
      </div>
      <hr />
    </>
  )
}

export default CartItem
