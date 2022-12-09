import React, {useState} from "react";
import CloseIcon from "@mui/icons-material/Close";

import styles from "../styles/TodoModal.module.css";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducer/todoSlice";

import { toast } from "react-toastify";

function TodoModal({isModalOpen, setIsModalOpen}) {

  const [taskTitle, setTaskTitle] = useState("")

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
console.log(taskTitle);
    if (taskTitle) {
      dispatch(addTodo({
        id:new Date().getTime().toString(),
        taskTitle,
      }))
      toast.success(`${taskTitle} added to your ToDoList`)
      setIsModalOpen(false)
      setTaskTitle("")
    }
    else {
      toast.error("Please Enter a Task to Add")
    }
  }

  return (
    <>
    {isModalOpen && (
      <div className={styles.wrapper}>
      <div className={styles.container}>
          <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
          <CloseIcon />
          </button>

        <form className={styles.form} >
          <h2 className={styles.formTitle}>Add Task</h2>
          <TextField id="outlined-basic" label="Enter Task" variant="outlined" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
        </form>

        <div className={styles.buttonContainer}>
          <Button type="submit" color="secondary" variant="contained" onClick={(e) => handleSubmit(e)}>
            Add Task
            {/* {type === 'add' ? 'Add Task' : 'Update Task'} */}
          </Button>

          <Button color="secondary" variant="outlined" onClick={() => setIsModalOpen(false)}>
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
