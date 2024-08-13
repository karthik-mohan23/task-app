import connectToDB from "@/db";
import Todo from "@/db/models/todos";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  await connectToDB();

  const id = params.id;
  const todoData = await request.json();
  const { title, description } = todoData;
  try {
    const taskToUpdate = await Todo.findById(id);
    if (!taskToUpdate) {
      return Response.json({
        success: false,
        message: "Couldn't find task task",
      });
    }

    await Todo.findByIdAndUpdate(id, todoData);

    return Response.json({
      success: true,
      message: "Successfully updated task",
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: "Error deleting task",
    });
  }
}
