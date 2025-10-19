import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import type { IProduct } from '@/types/productsTypes'
import { removeToCart } from '@/store/reducers/carts'

const Carts = () => {
  const dispatch = useAppDispatch()
  const { data } = useAppSelector((state) => state.products)
  const carts = useAppSelector((state) => state.carts)

  const cartsList = data?.filter((item) => {
    return carts.data.some((fav) => fav.id === item.id)
  })

  const removeCart = (item: IProduct) => {
    dispatch(removeToCart(item))
  }

  return (
    <>
      {cartsList && cartsList.length > 0 ? (
        cartsList.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.count}</p>
            <button onClick={() => removeCart(item)}>Удалить</button>
          </div>
        ))
      ) : (
        <h2>NO PRODUCTS CARTS</h2>
      )}
    </>
  )
}

export default Carts
