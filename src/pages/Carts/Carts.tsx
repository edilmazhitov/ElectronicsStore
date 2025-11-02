import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import type { IProduct } from '@/types/productsTypes'
import { removeToCart } from '@/store/reducers/carts'
import { useNavigate } from 'react-router-dom'
import styles from "./Carts.module.scss"
import NotProduct from "@components/NotProduct/NotProduct.tsx";
import { Container } from "@components/ui";

const Carts = () => {
  const dispatch = useAppDispatch()
  const { data } = useAppSelector((state) => state.products)
  const carts = useAppSelector((state) => state.carts)
  const { status } = useAppSelector((state) => state.user)
  const navigate = useNavigate()
  const cartsList = data?.filter((item) => {
    return carts.data.some((fav) => fav.id === item.id)
  })

  const removeCart = (item: IProduct) => {
    dispatch(removeToCart(item))
  }

  const totalPrice = carts.data.reduce((acc, cartItem) => {
    const product = data?.find((product) => product.id === cartItem.id)
    if (product) {
      return acc + product.price * cartItem.count
    }
    return acc
  }, 0)

  return (
    <section className={styles.cart}>
     <Container>
       <h1 className={styles.cart__title}>Корзина товаров</h1>
       {cartsList && cartsList.length > 0 ? (
         cartsList.map((item) => (

           <div>
             <div key={item.id}>
               <h2>{item.title}</h2>
               <p>PRICE: {item.price}</p>
               <button onClick={() => removeCart(item)}>Удалить</button>
             </div>

             <h2>TOTAL PRICE: ${totalPrice.toLocaleString('ru-RU')}</h2>
             <span
               onClick={() => {
                 if (status === 'success') {
                   navigate('/CheckOut')
                 } else {
                   alert('Войдите в аккаунт чтобы заказать товары')
                 }
               }}
             >
        <button>Заказать</button>
      </span>

           </div>

         ))
       ) : (

         <NotProduct />
       )}

     </Container>

    </section>
  )
}

export default Carts
