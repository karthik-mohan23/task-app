import AddTask from "@/components/addTask";

import ShowTasks from "@/components/showTasks";

async function page() {
  return (
    <main className="max-w-5xl mx-auto">
      <AddTask />
      <section>
        <h3 className="text-2xl text-center">All Tasks</h3>
        <ShowTasks />
      </section>
    </main>
  );
}
export default page;
