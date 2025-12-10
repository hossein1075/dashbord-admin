import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTaskeFromServer = createAsyncThunk(
    'tasks/getTaskeFromServer',
    async (url) => {
        return fetch (url)
        .then(res => res.json())
        .then(data => data)
    }
)

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {},


    extraReducers: (builder) => {
        builder.addCase(getTaskeFromServer.fulfilled , (state, action) => {
            return action.payload
        })
    }
})

export default tasksSlice.reducer