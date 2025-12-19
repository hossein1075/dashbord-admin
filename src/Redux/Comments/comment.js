import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCommentsFromServer = createAsyncThunk(
    'comments/getCommentsFromServer',
     async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    return data
      ? Object.entries(data).map(([firebaseId, comment]) => ({
          firebaseId,
          ...comment
        }))
      : []
  }
)

export const deleteCommentsFromServer = createAsyncThunk(
    'comments/deleteCommentsFromServer',
   async ({ url, firebaseId }) => {
    await fetch(`${url}/${firebaseId}.json`, { method: 'DELETE' });
    return firebaseId; 
  }
)

const commentSlice = createSlice({
    name: 'comments',
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getCommentsFromServer.fulfilled, (state, action) => {
                return action.payload
            })
            .addCase(deleteCommentsFromServer.fulfilled, (state, action) => {
                return state.filter(item => item.firebaseId  !== action.payload)
                
            })
    }
})

export default commentSlice.reducer