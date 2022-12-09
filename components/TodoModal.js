import React, {useState} from "react";
import CloseIcon from "@mui/icons-material/Close";

import styles from "../styles/TodoModal.module.css";
import { Button, TextField } from "@mui/material";

function TodoModal({modalOpen, setModalOpen}) {

  const [inputText, setInputText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputText);
  }

  return (
    <>
    {modalOpen && (
      <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* <div  */}
          <button className={styles.closeButton} onClick={() => setModalOpen(false)}>
          <CloseIcon />
          </button>
        {/* </div> */}

        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <h2 className={styles.formTitle}>Add Task</h2>
          <TextField id="outlined-basic" label="Enter Task" variant="outlined" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        </form>

        <div className={styles.buttonContainer}>
          <Button type="submit" color="secondary" variant="contained">
            Add Task
            {/* {type === 'add' ? 'Add Task' : 'Update Task'} */}
          </Button>

          <Button color="secondary" variant="outlined" onClick={() => setModalOpen(false)}>
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
