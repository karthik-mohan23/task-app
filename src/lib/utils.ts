export const fetchTasks = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`,
      {
        cache: "no-store",
      }
    );
    const json = await response.json();
    if (!json.success) {
      throw new Error("Error fetching tasks");
    }
    return json.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleTask = async (taskId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${taskId}`,
      {
        cache: "no-store",
      }
    );
    const json = await response.json();
    if (!json.success) {
      throw new Error("Error fetching task");
    }
    return json.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (taskId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/delete-todo`,
      {
        method: "DELETE",
        body: JSON.stringify({ taskId }),
      }
    );

    const jsonData = await response.json();
  } catch (error) {
    console.log(error);
  }
};
