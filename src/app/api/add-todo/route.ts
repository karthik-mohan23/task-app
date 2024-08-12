import connectToDB from "@/db";
import Todo from "@/db/models/todos";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connectToDB();

    const todoData = await request.json();
    const { title, description } = todoData;

    if (!title || !description) {
      return NextResponse.json({
        success: false,
        message: "All fields are required",
      });
    }

    const newTodo = await Todo.create(todoData);

    if (newTodo) {
      return NextResponse.json({
        success: true,
        message: "Successfully added todo",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Couldn't add new todo",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message:
        "Something went wrong while adding new todo. Please try again later.",
    });
  }
}
