import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { IFavorites, IProduct } from '@/types/productsTypes.ts'

const initialState: IFavorites = {
  data: [],
}

const favorites = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, action: PayloadAction<IProduct>) => {
      const exists = state.data.find((item) => item.id === action.payload.id)
      if (exists) {
        state.data = state.data.filter((item) => item.id !== action.payload.id)
      } else {
        state.data = [...state.data, action.payload]
      }
    },
  },
})

export const { toggleFavorites } = favorites.actions
export default favorites.reducer
