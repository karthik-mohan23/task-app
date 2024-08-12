import connectToDB from "@/db";
import Todo from "@/db/models/todos";

export async function GET(request: Request) {
  try {
    await connectToDB();

    const allTasks = await Todo.find({});

    return Response.json({
      success: true,
      data: allTasks,
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      success: false,
      message: "Couldn't fetch tasks",
    });
  }
}
