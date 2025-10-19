import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { IOrder, IOrderState } from '@/types/orderTypes.ts'

export const newOrder = createAsyncThunk<
  IOrder,
  IOrder,
  { rejectValue: string }
>('orders/newOrder', async (order, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:8080/orders', order)

    if (response.status !== 201) {
      throw new Error('Ошибка при отправке заказа, повторите ещё раз')
    }

    return response.data as IOrder
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : 'Ошибка от сервера'
    return rejectWithValue(errorMessage)
  }
})

const initialState: IOrderState = {
  data: [],
  status: 'idle',
  error: null,
}

const orders = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    clearOrders: (state) => {
      state.data = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(newOrder.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(newOrder.fulfilled, (state, action) => {
        state.status = 'success'
        state.data.push(action.payload)
      })
      .addCase(newOrder.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload || 'Ошибка при отправке заказа'
      })
  },
})

export const { clearOrders } = orders.actions
export default orders.reducer
