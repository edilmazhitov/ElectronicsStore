import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ICartItemState, IProduct } from '@/types/productsTypes.ts'

const initialState: ICartItemState = {
  data: [],
}

const carts = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addCarts: (state, action: PayloadAction<IProduct>) => {
      const productId = action.payload.id

      if (state.data.some((item) => item.id === productId)) {
        state.data = state.data.map((item) =>
          item.id === productId ? { ...item, count: item.count + 1 } : item,
        )
      } else {
        state.data.push({ ...action.payload, count: 1 })
      }
    },
    updateCartItem: (state, action: PayloadAction<IProduct>) => {
      state.data = state.data.map((item) =>
        item.id === action.payload.id
          ? { ...item, count: action.payload.count }
          : item,
      )
    },
    removeToCart: (state, action: PayloadAction<IProduct>) => {
      state.data = state.data.filter((item) => item.id !== action.payload.id)
    },
    clearAllCarts: (state) => {
      state.data = []
    },
  },
})

export const { addCarts, updateCartItem, removeToCart, clearAllCarts } =
  carts.actions

export default carts.reducer
