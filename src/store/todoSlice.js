import {createSlice} from '@reduxjs/toolkit';

import {db} from '../../firebaseConfig';


const initialState = {todo : []};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    todoList: (state, action) => {
       state.todo = [...state.todo , action.payload]
    },
    deleteTodo : (state,action)=>{
        state.todo = state.todo.filter((el,id)=> id !== action.payload )
    }
  },
});

export const {todoList,deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;
