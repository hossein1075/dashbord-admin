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

export const editProductsFromServer = createAsyncThunk(
  'products/editProductsFromServer',
  async ({ url, firebaseId, product }) => {
    await fetch(`${url}/${firebaseId}.json`, {
      method: 'PUT',
      body: JSON.stringify(product),
      headers: { 'Content-Type': 'application/json' }
    })
    return { firebaseId, ...product }
  }
)
export const addProductsFromServer = createAsyncThunk(
  'products/addProductsFromServer',
  async ({ url, product }) => {
    const res = await fetch(`${url}.json`, {
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await res.json()
    return { firebaseId: data.name, ...product }
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
      .addCase(editProductsFromServer.fulfilled, (state, action) => {
        const index = state.findIndex(item => item.firebaseId === action.payload.firebaseId)
        if (index !== -1) {
          state[index] = action.payload
        }

      })
      .addCase(addProductsFromServer.fulfilled, (state, action) => {
        state.push(action.payload)

      })
  }
})

export default productSlice.reducer