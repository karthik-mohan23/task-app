import { TaskType } from "@/lib/types";
import { fetchTasks } from "@/lib/utils";
import TaskDeleteButton from "@/components/taskDeleteButton";

async function ShowTasks() {
  const tasks: TaskType[] = await fetchTasks();

  return (
    <div className="flex flex-wrap gap-5 py-10">
      {tasks &&
        tasks.length > 0 &&
        tasks.map((task) => (
          <div
            key={task._id}
            className="border border-white/70 rounded-lg px-4 py-2 hover:scale-105 transition flex flex-col gap-3">
            <p>{task.title}</p>
            <p>{task.description}</p>
            <TaskDeleteButton todoId={task._id} />
          </div>
        ))}
    </div>
  );
}
export default ShowTasks;
