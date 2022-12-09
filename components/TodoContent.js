import React from "react";
import AddTaskButton from "./AddTaskButton";
import TodoModal from "./TodoModal";
import TodoList from "./TodoList";

const TodoContent = () => {
  return (
    <div>
      <AddTaskButton />
      <TodoModal />
      <TodoList />
    </div>
  );
};

export default TodoContent;
