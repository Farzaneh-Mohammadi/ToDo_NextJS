import { Button } from "@mui/material";
import React, { useState } from "react";
import TodoModal from "./TodoModal";
import styles from '../styles/Home.module.css'

function AddTaskButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div >
      <Button
      className={styles.addTaskBtn}
        variant="contained"
        onClick={() => setIsModalOpen(true)}
      >
        Click Here to Add Task
      </Button>
      <TodoModal
        type="add"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}

export default AddTaskButton;
