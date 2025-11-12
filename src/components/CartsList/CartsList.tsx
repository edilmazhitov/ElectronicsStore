import type { FC } from 'react'
import type { ICartItem } from '@/types/productsTypes'
import CartItem from '../CartItem/CartItem'

type CartsListProps = {
  data: ICartItem[]
}

const CartsList: FC<CartsListProps> = (props) => {
  const { data } = props

  return (
    <>
      {data.map((cartItem) => (
        <CartItem
          itemData={cartItem.itemData}
          count={cartItem.count}
          key={cartItem.itemData.id}
        />
      ))}
    </>
  )
}

export default CartsList
