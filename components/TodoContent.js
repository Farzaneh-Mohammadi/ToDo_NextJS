import React from "react";
import AddTaskButton from "./AddTaskButton";
import TodoModal from "./TodoModal";
import TodoList from "./TodoList";
import styles from "../styles/Home.module.css"

const TodoContent = () => {
  return (
    <div className={styles.todoAppContainer}>
      <AddTaskButton />
      <TodoModal />
      <TodoList />
    </div>
  );
};

export default TodoContent;
