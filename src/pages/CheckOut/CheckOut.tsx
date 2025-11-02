import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { useForm } from 'react-hook-form'
import { newOrder } from '@/store/reducers/orders'
import { useNavigate } from 'react-router-dom'
import type { IOrder, IUserInfo } from '@/types/orderTypes'
import { clearAllCarts } from '@/store/reducers/carts.ts'
import { Input } from "@components/ui"

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
    carts.data.some((cart) => cart.id === product.id)
  )

  const totalPrice = (cartsItems ?? []).reduce((acc, product) => {
    const cartItem = carts.data.find((cart) => cart.id === product.id)
    return acc + product.price * (cartItem?.count ?? 0)
  }, 0)

  const onSubmit = async (data: IUserInfo) => {
    const { fullName, email, address } = data

    const order: IOrder = {
      id: Date.now(),
      user: { fullName, email, address },
      items:
        cartsItems?.map((product) => {
          const cartItem = carts.data?.find((cart) => cart.id === product.id)
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
      dispatch(clearAllCarts())
      navigate('/')
      reset()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input register={register('fullName')} placeholder="Имя и фамилия" required />
      <Input register={register('email')} type="email" placeholder="Email" required />
      <Input register={register('address')} placeholder="Адрес" required />
      <p>Итого: {totalPrice} сом</p>
      <button type="submit">Оформить заказ</button>
    </form>
  )
}

export default CheckOut
