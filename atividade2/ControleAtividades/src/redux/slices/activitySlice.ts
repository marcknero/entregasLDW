import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Activity {
    id: number;
    title: string;
    category: string;
    completed: boolean;
};

interface ActivityState {
    activities: Activity[];
};


const activitySlice = createSlice({
    name: "activities",
    initialState:{
    activities: [],
    } as ActivityState,
    reducers: {
        addActivity: (state, action: PayloadAction<Activity>) => {
            state.activities.push(action.payload);
        },
        toggleActivityCompleted: (state, action: PayloadAction<number>) => {
            const activity = state.activities.find(activity => activity.id === action.payload);
            if (activity) {
                activity.completed = !activity.completed;
            }
        },
        removeActivity: (state, action: PayloadAction<number>) => {
            state.activities = state.activities.filter(activity => activity.id !== action.payload);
        },
        edditActivity: (state, action: PayloadAction<Activity>) => {
            const index = state.activities.findIndex(activity => activity.id === action.payload.id);
            if (index !== -1) {
                state.activities[index] = action.payload;
            }
        },
        removeAllActivities: (state) => {
            state.activities = state.activities.filter(activity => !activity.completed);
        }
    },
});


export const { addActivity, toggleActivityCompleted, removeActivity, edditActivity, removeAllActivities } = activitySlice.actions;
export default activitySlice.reducer;