import styles from './Carts.module.scss'

import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { clearCarts } from '@/store/reducers/carts'

import { Container } from '@components/ui'
import NotProduct from '@components/NotProduct/NotProduct'
import CartsList from '@components/CartsList/CartsList'
import { FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Carts = () => {
  const dispatch = useAppDispatch()
  const carts = useAppSelector((state) => state.carts)
  const products = useAppSelector((state) => state.products)
  const { status } = useAppSelector((state) => state.user)

  const navigate = useNavigate()
  const onClearAllCarts = () => {
    dispatch(clearCarts())
  }

  const totalPrice = carts.data.reduce((acc, cartItem) => {
    const product = products.data.find(
      (product) => product.id === cartItem?.itemData.id
    )
    if (product) {
      return acc + product.price * cartItem.count
    }
    return acc
  }, 0)

  return (
    <main className={styles.main}>
      <section className={styles.information}>
        <Container>
          <h1 className={styles.information__title}>Корзина товаров</h1>
        </Container>
      </section>

      {carts.data.length > 0 ? (
        <section className={styles.carts}>
          <Container>
            <CartsList data={carts.data} />
            <div className={styles.carts__bottom}>
              <h2 className={styles.carts__total}>
                <b>Общая сумм:</b> {totalPrice.toLocaleString('ru-RU')}
                <span> сомов</span>
              </h2>

              <div className={styles.carts__block}>
                <span
                  onClick={() => {
                    if (carts.data.length === 0) {
                      alert(
                        'Корзина пуста. Добавьте товары в корзину для оформления заказа.'
                      )
                    } else if (status === 'success') {
                      navigate('/CheckOut')
                    } else {
                      alert('Войдите в аккаунт чтобы заказать товары')
                    }
                  }}
                >
                  <button className={styles.carts__button}>
                    Перейти к оформлению
                  </button>
                </span>
                <button
                  className={styles.carts__button}
                  onClick={() => onClearAllCarts()}
                >
                  Очистить корзину <FaTrash />
                </button>
              </div>
            </div>
          </Container>
        </section>
      ) : (
        <NotProduct />
      )}
    </main>
  )
}

export default Carts
