import AddTask from "@/components/addTask";
import { TaskType } from "@/lib/types";

import { fetchTasks } from "@/lib/utils";
import TaskDeleteButton from "@/components/taskDeleteButton";

async function page() {
  const tasks: TaskType[] = await fetchTasks();

  return (
    <main className="max-w-5xl mx-auto">
      <AddTask />
      <section>
        <h3 className="text-2xl text-center">All Tasks</h3>
        <div className="flex flex-wrap gap-5 py-10">
          {tasks.length > 0 &&
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
      </section>
    </main>
  );
}
export default page;
