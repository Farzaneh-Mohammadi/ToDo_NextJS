import { Button } from '@mui/material';
import React, { useState } from 'react';
import TodoModal from './TodoModal';

function AddTaskButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div>
      <Button color="secondary" variant="contained" onClick={() => setIsModalOpen(true)}>
          Add Task 
      </Button> 
      <TodoModal type="add" isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default AddTaskButton;
