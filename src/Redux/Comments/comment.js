import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCommentsFromServer = createAsyncThunk(
    'comments/getCommentsFromServer',
    async (url) => {
        return fetch(url)
            .then(res => res.json())
            .then(data => data)
    }
)

const commentSlice = createSlice({
    name: 'comments',
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getCommentsFromServer.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default commentSlice.reducer