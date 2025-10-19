import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import type { IProduct, IProductState } from '@/types/productsTypes'
import type { IErrorResponse } from '@/types/reduxTypes'

export const getAllProducts = createAsyncThunk<
  IProduct[],
  void,
  { rejectValue: IErrorResponse }
>('get/getAllProducts', async (_, { rejectWithValue }) => {
  try {
    const res = await axios('http://localhost:8080/products')

    if (res.status !== 200) {
      throw new Error('Ошибка при получение товаров')
    }

    return res.data
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : 'Ошибка от сервера'
    return rejectWithValue({ message: errorMessage })
  }
})

const initialState: IProductState = {
  data: null,
  status: 'idle',
  error: null,
}

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload?.message || 'Ошибка от сервера'
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = 'success'
        state.data = action.payload
      })
  },
})

export default products.reducer
