import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema);

export default Todo;
