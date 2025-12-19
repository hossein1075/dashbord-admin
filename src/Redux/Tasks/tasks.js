import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTaskeFromServer = createAsyncThunk(
    'tasks/getTaskeFromServer',
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

export const deleteTasksFromServer = createAsyncThunk(
    'tasks/deleteTasksFromServer',
    async ({ url, firebaseId }) => {
        await fetch(`${url}/${firebaseId}.json`, { method: 'DELETE' });
        return firebaseId;
    }
)

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {},


    extraReducers: (builder) => {
        builder
            .addCase(getTaskeFromServer.fulfilled, (state, action) => {
                return action.payload
            })
            .addCase(deleteTasksFromServer.fulfilled, (state, action) => {
                return state.filter(item => item.firebaseId !== action.payload)

            })
    }
})

export default tasksSlice.reducer