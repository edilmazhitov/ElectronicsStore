import type { Status } from './reduxTypes'

export interface IProduct {
  title: string
  price: number
  count: number
  image: string
  images: string[]
  description: string
  id: number
}

export interface IProductState {
  data: null | IProduct[]
  status: Status
  error: string | null
}

export type IFavorites = {
  data: [] | IProduct[]
}

export interface ICartItem {
  itemData: {
    id: number
    title: string
    description: string
    image: string
    price: number
  }
  count: number
}

export interface ICartItemState {
  data: ICartItem[]
}
