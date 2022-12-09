import { Button } from "@mui/material";
import React, { useState } from "react";
import TodoModal from "./TodoModal";

function AddTaskButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div >
      <Button
      style= {{
        backgroundColor: 'rgb(255, 32, 225)',
        color: '#fff',
         fontWeight: 'bold',
          padding: '1rem 3rem',
          margin: '1rem auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
      }}
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
