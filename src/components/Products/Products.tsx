import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { useEffect } from 'react'
import { getAllProducts } from '@/store/reducers/products'
import styles from './Products.module.scss'
import { toggleFavorites } from '@/store/reducers/favorites'
import type { IProduct } from '@/types/productsTypes'
import { addCarts } from '@/store/reducers/carts'
import { FiBarChart2, FiShoppingCart } from 'react-icons/fi'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import cn from 'classnames'

const Products = () => {
  const dispatch = useAppDispatch()

  const { data } = useAppSelector((state) => state.products)
  const favorites = useAppSelector((state) => state.favorites)
  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  const handleFavorites = (item: IProduct) => {
    dispatch(toggleFavorites(item))
  }

  const addToCart = (item: IProduct) => {
    dispatch(addCarts(item))
  }

  return (
    <div className={styles.products}>
      {data?.map((item) => (
        <div key={item.id} className={styles.products__block}>
          <img
            src={item.image}
            alt={item.title}
            className={styles.products__image}
          />
          <p className={styles.products__article}>Артикул: {item.id}</p>
          <h3 className={styles.products__title}>{item.title}</h3>
          <h4 className={styles.products__price}>
            {item.price.toLocaleString('RU-ru')} ₽
          </h4>
          <div className={styles['products__block-bottom']}>
            <div className={styles.products__left}>
              <button
                className={styles['products__add-to-cart']}
                onClick={() => addToCart(item)}
              >
                <FiShoppingCart
                  className={styles['products__add-to-cart-icon']}
                />
                <p>Купить</p>
              </button>
            </div>
            <div className={styles.products__rigth}>
              <button
                className={cn(styles['products__favorites-button'])}
                onClick={() => handleFavorites(item)}
              >
                {favorites.data.some(
                  (favoritesItem) => favoritesItem.id === item.id,
                ) ? (
                  <MdFavorite
                    style={{ color: 'red' }}
                    className={styles['products__favorites-icon']}
                  />
                ) : (
                  <MdFavoriteBorder
                    className={styles['products__favorites-icon']}
                  />
                )}
              </button>
              <button className={styles['products__comparison-button']}>
                <FiBarChart2 className={styles['products__comparison']} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products
