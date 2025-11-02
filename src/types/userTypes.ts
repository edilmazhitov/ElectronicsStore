import type { Status } from './reduxTypes'

export interface IUser {
  email: string
  fullName: string
  region: string
  phoneNumber: string
  password: string
  confirmPassword?: string
  balance?: number
  id?: number
}

export interface IRegisterUser {
  email: string
  fullName: string
  region: string
  phoneNumber: string
  password: string
  confirmPassword: string
}

export interface IUserState {
  data: null | IUser
  status: Status
  error: string | null
}
