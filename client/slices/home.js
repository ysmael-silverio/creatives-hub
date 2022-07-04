import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getHome } from '../apis/home'

export const fetchHome = createAsyncThunk('home/fetchHome', async () => {
  return await getHome()
})

const slice = createSlice({
  name: 'home',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchHome.fulfilled]: (state, { payload }) => payload,
  },
})

export const selectHome = (state) => state.fruits
export default slice.reducer
