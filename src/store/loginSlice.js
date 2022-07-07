import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {username : 'Amit',password : '12345'}
];

const loginSlice = createSlice({
    name : 'login',
    initialState,
    reducers: {
        userLogin : (state,action)=>{

        }
    }
})

export const {userLogin} = loginSlice.actions;

export default loginSlice.reducer;