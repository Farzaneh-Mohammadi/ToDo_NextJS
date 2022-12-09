import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteTodo } from "../redux/reducer/todoSlice";
import TodoModal from "./TodoModal";
import styles from "../styles/TodoItem.module.css";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

const TodoItem = ({ todo }) => {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id)); // --- CRUD => DELETE method - delete a todo ---
  };

  return (
    <div>
      <div className={styles.todoRow}>
        <div className={styles.todoTitle}>{todo.taskTitle}</div>

        <div className={styles.todoBtns}>
          <Button onClick={handleUpdate} style={{ color: "black" }}>
            <EditIcon />
          </Button>

          <Button onClick={handleDelete} style={{ color: "red" }}>
            <DeleteIcon />
          </Button>
        </div>
      </div>

      <TodoModal
        todo={todo}
        type="update"
        isModalOpen={updateModalOpen}
        setIsModalOpen={setUpdateModalOpen}
      />
    </div>
  );
};

export default TodoItem;
