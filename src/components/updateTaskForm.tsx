"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/navigation";

export default function UpdateTaskForm({ todoId }: { todoId: string }) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const fetchTaskDetails = async (todoId: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${todoId}`,
        {
          cache: "no-store",
        }
      );
      const json = await response.json();
      console.log(json);
      if (!json.success) {
        throw new Error("Error fetching task");
      }
      const { title, description } = json.data;
      setTitle(title);
      setDescription(description);
    } catch (error) {
      console.log(error);
    }
  };

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title || !description) {
      return;
    }

    const data = { title, description };
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/update-todo/${todoId}`,
        {
          method: "PATCH",
          body: JSON.stringify(data),
        }
      );

      const jsonData = await response.json();
      handleClose();
      setTitle("");
      setDescription("");
      router.refresh();
    } catch (error) {
      console.log(error);
      alert("error creating task");
    }
  };

  const handleClickOpen = async () => {
    await fetchTaskDetails(todoId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
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
          <Button type="submit">Update</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
