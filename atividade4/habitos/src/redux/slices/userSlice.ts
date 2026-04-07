import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface User {
    id:number;
    name: string;
    age: number;
};

interface UserState {
    users: User[];
};

const userSlice = createSlice({
    name: "users",
    initialState:{
        users: [],
    } as UserState,
    reducers: {
        addUser: (state, action: PayloadAction<User>)=>{
            state.users.push(action.payload);
        },
        removeUser: (state,action: PayloadAction<number>)=>{
            state.users = state.users.filter(user => user.id !== action.payload)
        }
    },
});

export const { addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;