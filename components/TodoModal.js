import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { addTodo, editTodo } from "../redux/reducer/todoSlice";
import styles from "../styles/TodoModal.module.css";

import { toast } from "react-toastify";
import { Button, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


function TodoModal({ type, isModalOpen, setIsModalOpen, todo }) {

  const [taskTitle, setTaskTitle] = useState("");

  const dispatch = useDispatch();


  // to replace old task with new task after editing 
  useEffect(() => {
    if (type === "update" && todo) {
      setTaskTitle(todo.taskTitle);
    } else {
      setTaskTitle("");
    }
  }, [type, todo, isModalOpen]);



  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle === "") {
      toast.error("Please Enter a value!");
      return;
    }
    // console.log(taskTitle);
    if (taskTitle) {

    // CRUD => CREATE method - add a task to list 
      if (type === "add") {
        dispatch(
          addTodo({
            id: new Date().getTime().toString(),
            taskTitle,
          })
        );
        toast.success(`${taskTitle} Added!`);
        setIsModalOpen(false);
        setTaskTitle("");
      }

       // CRUD => UPDATE method - edit a task on list
      if (type === "update") {
        // console.log("updating");
        if (todo.taskTitle !== taskTitle) {
          dispatch(
            editTodo({
              ...todo,
              taskTitle,
            })
          );
          toast.success("Value Changed!");
          setIsModalOpen(false);
          setTaskTitle("");
        } else {
          toast.error("Please Change value!");
        }
      }
    } else {
      toast.error("Please Enter a value!");
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <button
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
            >
              <CloseIcon />
            </button>

            <form className={styles.form}>

              <h2 className={styles.formTitle}>
              {/*  -------- handle modal title -------- */}
                {type === "add" ? "Add Task" : "Update Task"}   
              </h2>

              <TextField
                id="outlined-basic"
                label="Enter Task"
                variant="outlined"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </form>

            <div className={styles.buttonContainer}>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                onClick={(e) => handleSubmit(e)}
              >
               {/*  -------- handle modal button  -------- */}
                {type === "add" ? "Add Task" : "Update Task"}
              </Button>

              <Button
                color="secondary"
                variant="outlined"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoModal;
