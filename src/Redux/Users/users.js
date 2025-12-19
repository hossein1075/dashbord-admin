import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersFromServer = createAsyncThunk(
    'users/getUsersFromServer',
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

export const deleteUsersFromServer = createAsyncThunk(
    'users/deleteUsersFromServer',
    async ({ url, firebaseId }) => {
        await fetch(`${url}/${firebaseId}.json`, { method: 'DELETE' });
        return firebaseId;
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getUsersFromServer.fulfilled, (state, action) => {
                return action.payload
            })
            .addCase(deleteUsersFromServer.fulfilled, (state, action) => {
                return state.filter(item => item.firebaseId !== action.payload)

            })
    }
})

export default usersSlice.reducer