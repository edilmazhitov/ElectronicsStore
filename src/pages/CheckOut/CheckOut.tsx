import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { useForm } from 'react-hook-form'
import { newOrder } from '@/store/reducers/orders'
import { useNavigate } from 'react-router-dom'
import type { IOrder, IUserInfo } from '@/types/orderTypes'
import { clearCarts } from '@/store/reducers/carts.ts'
import { Input, Container } from '@components/ui'
import styles from './CheckOut.module.scss'
const CheckOut = () => {
  const user = useAppSelector((state) => state.user)
  const carts = useAppSelector((state) => state.carts)
  const products = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { register, handleSubmit, reset } = useForm<IUserInfo>({
    defaultValues: {
      fullName: user.data?.fullName || '',
      email: user.data?.email || '',
      address: '',
    },
  })

  const cartsItems = products.data?.filter((product) =>
    carts.data.some((cart) => cart.itemData.id === product.id)
  )

  const totalPrice = (cartsItems ?? []).reduce((acc, product) => {
    const cartItem = carts.data.find((cart) => cart.itemData.id === product.id)
    return acc + product.price * (cartItem?.count ?? 0)
  }, 0)

  const onSubmit = async (data: IUserInfo) => {
    const { fullName, email, address } = data

    const order: IOrder = {
      id: Date.now(),
      user: { fullName, email, address },
      items:
        cartsItems?.map((product) => {
          const cartItem = carts.data?.find(
            (cart) => cart.itemData.id === product.id
          )
          const count = cartItem?.count ?? 1
          const productId = Number(product.id)
          return {
            id: productId,
            title: product.title,
            count,
            price: Number(product.price),
            total: Number(product.price) * count,
          }
        }) ?? [],
      totalPrice,
    }

    try {
      await dispatch(newOrder(order)).unwrap()
      dispatch(clearCarts())
      navigate('/')
      reset()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <h1 className={styles.check__title}>оформления заказа</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.check__form}>
        <Input
          register={register('fullName')}
          placeholder="Имя и фамилия"
          required
          label={
            <>
              Имя и Фамилия <span className={styles.required}>*</span>:
            </>
          }
          className={styles.check__input}
        />
        <Input
          register={register('email')}
          id="email"
          type="email"
          placeholder="Электроннач почта "
          required
          label={
            <>
              Электроннач почта <span className={styles.required}>*</span>:
            </>
          }
          className={styles.check__input}
        />
        <Input
          register={register('address')}
          placeholder="Адрес"
          label={
            <>
              Адрес <span className={styles.required}>*</span>:
            </>
          }
          required
          className={styles.check__input}
        />
        <p>Общий сумма: {totalPrice.toLocaleString('ru-RU')} сомов</p>
        <div className={styles.check__block}>
          <button className={styles.check__button} type="submit">
            Оформить заказ
          </button>
        </div>
      </form>
    </Container>
  )
}

export default CheckOut
