import React from "react";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

import styles from "../styles/TodoItem.module.css";
import {useSelector, useDispatch} from 'react-redux'
import { deleteTodo } from "../redux/reducer/todoSlice";


const TodoItem = ({ todo }) => {

  const dispatch = useDispatch();
  // const todoList = useSelector((state) => state.todo.todoList)


  const handleUpdate = () => {

  }
  

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id))
  }

  return (
    <div >
      <div className={styles.todoRow}>
        <p>{todo.taskTitle}</p>

        <div className={styles.todoBtns}>
          <Button onClick={handleUpdate}  style={{ color: "black" }}>
            <EditIcon />
          </Button>

          <Button onClick={handleDelete} style={{ color: "red" }} >
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
