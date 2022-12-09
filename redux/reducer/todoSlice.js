import { createSlice } from '@reduxjs/toolkit';


const initialValue = {
  todoList: [],
};



export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },



    deleteTodo: (state, action) => {
      const newTodoList = state.todoList.filter((newItem) => newItem.id !== action.payload);
      return {
        ...state,
        todoList: newTodoList,
      };
    },

  },
});

export const { addTodo, deleteTodo } =todoSlice.actions;
export default todoSlice.reducer;
