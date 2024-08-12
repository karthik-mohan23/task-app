"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/navigation";

type AddTaskDialogProps = {
  open: boolean;
  handleClose: () => void;
};

export default function AddTaskDialog({
  open,
  handleClose,
}: AddTaskDialogProps) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title || !description) {
      return;
    }

    const data = { title, description };
    try {
      const response = await fetch("/api/add-todo", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const json = await response.json();
      handleClose();
      setTitle("");
      setDescription("");
      router.refresh();
    } catch (error) {
      console.log(error);
      alert("error creating task");
    }
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <TextField
            id="task-title"
            label="Add title"
            value={title}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(event.target.value);
            }}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            id="task-description"
            label="Add description"
            value={description}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDescription(event.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
