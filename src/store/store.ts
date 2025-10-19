import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import user from './reducers/user'
import products from './reducers/products'
import favorites from './reducers/favorites'
import carts from './reducers/carts'
import reviews from './reducers/reviews'

const rootReducer = combineReducers({
  user,
  products,
  favorites,
  carts,
  reviews,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
