import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Habit {
    id: number;
    title: string;
    category: string;
};

interface HabitsState {
    habits: Habit[];
    filter: string;
};

const initialState: HabitsState = {
    habits: [],
    filter: "all"
};

const habitSlice = createSlice ({
    name: "habits",
    initialState,
    reducers: {
        addHabit: (state, action: PayloadAction<Habit>)=> {
            state.habits.push(action.payload);
        },
        removeHabit: (state,action: PayloadAction<number>)=>{
            state.habits = state.habits.filter(habit=>habit.id !== action.payload);
        },
        updateHabit: (state, action: PayloadAction<Habit>) => {
            state.habits = state.habits.map((habit) =>
                habit.id === action.payload.id ? action.payload : habit
            );
        },
        setFilter: (state, action:PayloadAction<string>)=>{
            state.filter = action.payload;
        }
    }
});

export const { addHabit, removeHabit, updateHabit, setFilter} = habitSlice.actions;
export default habitSlice.reducer;
