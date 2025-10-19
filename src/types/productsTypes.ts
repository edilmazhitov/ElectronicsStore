import type { Status } from './userTypes'

export interface IProduct {
  title: string
  price: number
  count: number
  image: string
  images: string[]
  description: string
  id?: number | string
}

export interface IProductState {
  data: null | IProduct[]
  status: Status
  error: string | null
}

export type IFavorites = {
  data: [] | IProduct[]
}

interface ICartItem extends IProduct {
  count: number
}

export interface ICartItemState {
  data: ICartItem[]
}
