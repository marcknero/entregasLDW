import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import habitsReducer from './slices/habitsSlice'


export const store = configureStore({
    reducer:{
        users: userReducer,
        habits: habitsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispetch = typeof store.dispatch;


(window as any).store = store;