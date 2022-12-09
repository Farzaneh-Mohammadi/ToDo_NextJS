import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {

    // CRUD => CREATE method - add a task to list 
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },

    // CRUD => DELETE method - delete a task from list 
    deleteTodo: (state, action) => {
      const newTodoList = state.todoList.filter(
        (newItem) => newItem.id !== action.payload
      );
      return {
        ...state,
        todoList: newTodoList,
      };
    },

    // CRUD => UPDATE method - edit a task on list
    editTodo: (state, action) => {
      state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.taskTitle = action.payload.taskTitle;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
