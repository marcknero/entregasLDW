import { configureStore } from "@reduxjs/toolkit";
import activityReducer from "./slices/activitySlice";

export const store = configureStore({
    reducer: {
        activities: activityReducer,
    },
});

//exportando tipos para uso
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
