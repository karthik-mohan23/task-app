import connectToDB from "@/db";
import Todo from "@/db/models/todos";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await connectToDB();

    const allTasks = await Todo.find({});

    return NextResponse.json({
      success: true,
      data: allTasks,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Couldn't fetch tasks",
    });
  }
}
