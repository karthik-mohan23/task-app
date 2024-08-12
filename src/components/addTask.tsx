"use client";
import { Button } from "@mui/material";
import { useState } from "react";
import AddTaskDialog from "./addTaskForm";

function AddTask() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="py-5">
      <Button variant="outlined" onClick={handleClickOpen}>
        Add new task
      </Button>
      <AddTaskDialog open={open} handleClose={handleClose} />
    </div>
  );
}
export default AddTask;
