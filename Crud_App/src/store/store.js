import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/fetchUsers'

export const store = configureStore({
  reducer: {user : userReducer},
})