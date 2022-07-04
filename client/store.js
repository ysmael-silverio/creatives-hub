import { configureStore } from '@reduxjs/toolkit'
import fruits from './slices/home'

const store = configureStore({
  reducer: {
    fruits,
  },
})

export default store
