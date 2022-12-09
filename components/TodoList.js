import React from "react";
import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";
import styles from "../styles/TodoItem.module.css";

const TodoList = () => {

  const todoList = useSelector((state) => state.todo.todoList); //fetch data from redux
  console.log("todoList:", todoList);

  return (
    // -------- CRUD => READ method - show list of datas ---------
    <div className={styles.todoItemContainer}>
      {todoList && todoList.length > 0
        ? todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : "There is no item in your ToDo List !!!"}
    </div>
  );
};

export default TodoList;
