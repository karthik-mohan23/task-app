import connectToDB from "@/db";
import Todo from "@/db/models/todos";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  await connectToDB();

  const id = params.id;

  try {
    const taskToFind = await Todo.findById(id);
    if (!taskToFind) {
      return Response.json({
        success: false,
        message: "Couldn't find task task",
      });
    }

    return Response.json({
      success: true,
      //   message: "Successfully found task",
      data: taskToFind,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: "Error deleting task",
    });
  }
}
