import { configureStore } from "@reduxjs/toolkit";
import userSlice from './Users/users'
import productSlice from './Products/product'
import commentSlice from './Comments/comment'
import taskSlice from './Tasks/tasks'
export const store = configureStore({
    reducer: {
        user: userSlice,
        product: productSlice,
        comment: commentSlice,
        task: taskSlice
    }
})