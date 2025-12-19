import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProductsFromServer = createAsyncThunk(
    'products/getProductsFromServer',
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

export const deleteProductsFromServer = createAsyncThunk(
    'products/deleteProductsFromServer',
   async ({ url, firebaseId }) => {
    await fetch(`${url}/${firebaseId}.json`, { method: 'DELETE' });
    return firebaseId; 
  }
)

const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {},


    extraReducers: (builder) => {
        builder
            .addCase(getProductsFromServer.fulfilled, (state, action) => {
                return action.payload
            })
            .addCase(deleteProductsFromServer.fulfilled, (state, action) => {
                return state.filter(item => item.firebaseId !== action.payload)

            })
    }
})

export default productSlice.reducer