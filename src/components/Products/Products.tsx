import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { useEffect } from 'react'
import { getAllProducts } from '@/store/reducers/products'
import styles from './Products.module.scss'
import { toggleFavorites } from '@/store/reducers/favorites'
import type { IProduct } from '@/types/productsTypes'
import { addCarts } from '@/store/reducers/carts.ts'

const Products = () => {
  const dispatch = useAppDispatch()

  const { data } = useAppSelector((state) => state.products)

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
        <div key={item.id}>
          <h2>{item.title}</h2>

          <button onClick={() => handleFavorites(item)}>FAVORITES</button>
          <button onClick={() => addToCart(item)}>ADD TO CART</button>
        </div>
      ))}
    </div>
  )
}

export default Products
