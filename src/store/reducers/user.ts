import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { IUser, IErrorResponse, IUserState } from '@/types/userTypes.ts'
import axios from 'axios'

export const registerUser = createAsyncThunk<
  IUser,
  IUser,
  { rejectValue: IErrorResponse }
>('post/registerUser', async (arg, { rejectWithValue }) => {
  try {
    const res = await axios.post('http://localhost:8080/register', arg)

    if (res.status !== 201) {
      throw new Error('Ошибка при регистрации')
    }

    return res.data.user
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : 'Ошибка от сервера'
    return rejectWithValue({ message: errorMessage })
  }
})

export const loginUser = createAsyncThunk<
  IUser,
  IUser,
  { rejectValue: IErrorResponse }
>('post/loginUser', async (arg, { rejectWithValue }) => {
  try {
    const res = await axios.post('http://localhost:8080/login', arg)

    if (res.status !== 200) {
      throw new Error('Ошибка при авторизации')
    }

    return res.data.user
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : 'Ошибка от сервера'
    return rejectWithValue({ message: errorMessage })
  }
})

const initialState: IUserState = {
  data: null,
  status: 'idle',
  error: null,
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state) => {
      state.data = null
      state.status = 'idle'
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload?.message || 'Ошибка от сервера'
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'success'
        state.data = action.payload
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload?.message || 'Ошибка от сервера'
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'success'
        state.data = action.payload
      })
  },
})

export default user.reducer
export const { logOut } = user.actions
