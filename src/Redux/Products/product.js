import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProductsFromServer = createAsyncThunk(
    'products/getTaskeFromServer',
    async (url) => {
        return fetch(url)
            .then(res => res.json())
            .then(data => data)
    }
)

const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {},


    extraReducers: (builder) => {
        builder.addCase(getProductsFromServer.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default productSlice.reducer