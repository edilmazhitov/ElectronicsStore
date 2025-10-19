import type { Status } from './reduxTypes'

export interface IOrderItem {
  id: number
  title: string
  count: number
  price: number
  total: number
}

export interface IUserInfo {
  fullName: string
  email: string
  address: string
}

export interface IOrder {
  id: number
  user: IUserInfo
  items: IOrderItem[]
  totalPrice: number
}

export interface IOrderState {
  data: IOrder[]
  status: Status
  error: string | null
}
