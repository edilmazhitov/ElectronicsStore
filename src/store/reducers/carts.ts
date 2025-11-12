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
      if (productId === undefined) return

      const existingItem = state.data.find(item => item.itemData?.id === productId)

      if (existingItem) {
        existingItem.count = (existingItem.count || 1) + 1
      } else {
        state.data.push({ itemData: action.payload, count: 1 })
      }
    },
    minusOneProducts: (state, action: PayloadAction<IProduct>) => {
      const productId = action.payload.id

      const existingItem = state.data.find(item => item.itemData?.id === productId)

      if (existingItem.count > 1) {
        existingItem.count = existingItem.count - 1
      }
    },
    updateCartItem: (state, action: PayloadAction<{ id: number; count: number }>) => {
      state.data = state.data.map(item =>
        item.itemData?.id === action.payload.id
          ? { ...item, count: action.payload.count }
          : item
      )
    },
    removeToCart: (state, action: PayloadAction<IProduct>) => {
      state.data = state.data.filter(item => item.itemData?.id !== action.payload.id)
    },
    clearCarts: (state) => {
      state.data = []
    }

  },
})

export const { addCarts,
  updateCartItem,
  removeToCart,
  minusOneProducts,
  clearCarts } =
  carts.actions

export default carts.reducer
