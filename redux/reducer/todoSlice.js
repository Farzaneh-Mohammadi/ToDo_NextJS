import { createSlice } from '@reduxjs/toolkit';

// const getInitialTodo = () => {
//   // getting todo list
// //   const localTodoList = localStorage.getItem('todoList');
//   // if todo list is not empty
//   if (localTodoList) {
//     return JSON.parse(localTodoList);
//   }
//   localStorage.setItem('todoList', JSON.stringify([]));
//   return [];
// };

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
