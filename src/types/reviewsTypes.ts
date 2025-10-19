import type { Status } from './reduxTypes'

export interface IReviews {
  id: number
  userName: string
  date: string
  rating: number
  text: string
}

export interface IReviewsState {
  data: IReviews[]
  status: Status
  error: string | null
}
