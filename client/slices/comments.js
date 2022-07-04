import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchHomeComments = createAsyncThunk(
  'HomeComments/fetchHomeComments',
  async (homeId) => {
    return await getHomeComments(homeId)
  }
)

export const addHomeComments = createAsyncThunk(
  'homeComments/addHomeComments',
  async (comment) => {
    return await postHomeComments(comment)
  }
)

const sliceComments = createSlice({
  name: 'HomeComments',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchHomeComments.fulfilled]: (state, { payload }) => payload,
  },
})

export const selectHomComments = (state) => state.addHomeComments

export default sliceComments.reducer
