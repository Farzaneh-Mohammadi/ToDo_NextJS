import React, { useState } from "react";

import TodoModal from "./TodoModal";

import { Button } from "@mui/material";

function AddTaskButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1
        style={{
          color: "rgb(255, 32, 225)",
          fontWeight: "bold",

          margin: "1rem auto 3rem auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textShadow: "2px 2px 3px purple",
        }}
      >
        ToDo App | NextJS and Redux
      </h1>
      <hr />
      <Button
        style={{
          backgroundColor: "rgb(255, 32, 225)",
          color: "#fff",
          fontWeight: "bold",
          padding: "1rem 3rem",
          margin: "3rem auto 1rem auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
