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
