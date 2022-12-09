import { Button } from '@mui/material';
import React, { useState } from 'react';
import TodoModal from './TodoModal';

function AddTaskButton() {
  const [modalOpen, setModalOpen] = useState(false);


  return (
    <div>
<Button color="secondary" variant="contained" onClick={() => setModalOpen(true)}>
       Add Task
      </Button>

      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AddTaskButton;
