import connectToDB from "@/db";
import Todo from "@/db/models/todos";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  await connectToDB();

  const { taskId: id } = await request.json();
  console.log(id);
  try {
    const taskToDelete = await Todo.findById(id);
    if (!taskToDelete) {
      return NextResponse.json({
        success: false,
        message: "Couldn't find task task",
      });
    }

    await Todo.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Successfully deleted task",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error deleting task",
    });
  }
}
