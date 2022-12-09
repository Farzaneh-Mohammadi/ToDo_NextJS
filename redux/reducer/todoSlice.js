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
    

  },
});

export const { addTodo } =todoSlice.actions;
export default todoSlice.reducer;
