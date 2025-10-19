import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import type { IReviews, IReviewsState } from '@/types/reviewsTypes'
import type { IErrorResponse } from '@/types/reduxTypes'

export const getAllReviews = createAsyncThunk<
  IReviews[],
  void,
  { rejectValue: IErrorResponse }
>('get/getAllReviews', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get('http://localhost:8080/reviews')

    if (res.status !== 200) {
      throw new Error('Ошибка при получение отзывов')
    }
    return res.data
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : 'Ошибка от сервера'
    return rejectWithValue({ message: errorMessage })
  }
})

export const addReviews = createAsyncThunk<
  IReviews,
  IReviews,
  { rejectValue: IErrorResponse }
>('post/addAllReviews', async (arg, { rejectWithValue }) => {
  try {
    const res = await axios.post('http://localhost:8080/reviews', arg)

    if (res.status !== 201) {
      throw new Error('Ошибка при создании отзыва')
    }

    return res.data
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : 'Ошибка от сервера'
    return rejectWithValue({ message: errorMessage })
  }
})

const initialState: IReviewsState = {
  data: [],
  status: 'idle',
  error: null,
}

const reviews = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllReviews.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(getAllReviews.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload?.message || 'Ошибка от сервера'
      })
      .addCase(getAllReviews.fulfilled, (state, action) => {
        state.status = 'success'
        state.data = action.payload
      })
      .addCase(addReviews.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(addReviews.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload?.message || 'Ошибка от сервера'
      })
      .addCase(addReviews.fulfilled, (state, action) => {
        state.status = 'success'
        state.data.push(action.payload)
      })
  },
})

export default reviews.reducer
