import {createSlice} from '@reduxjs/toolkit';

import firestore from '@react-native-firebase/firestore';

const initialState = {todo: [], newTodo: []};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    todoList: (state, action) => {
      // state.todo = state.todo.filter(el =>el.id !== action.payload.id)
      action.payload.filter(el => el.id !== state.todo.map(el => el.id));
      state.todo = [...state.todo, ...action.payload];
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((el, id) => el.id !== action.payload.id);
    },
    addTodo: (state, action) => {
      state.newTodo = [...state.newTodo, ...action.payload];
    },
  },
});

export const {todoList, deleteTodo, addTodo} = todoSlice.actions;

export default todoSlice.reducer;
