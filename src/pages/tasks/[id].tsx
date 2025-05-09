'use client'

import {useTasks} from "@/utils";
import {useRouter} from "next/router";

export default () => {
  const router = useRouter();
  const [tasks, setTasks] = useTasks()


  const id = Number(router.query.id as string);
  const task = tasks[id];

  if (!task) return <p>Task not found</p>

  return (
    <div className="flex flex-col gap-4 m-4">
      <input placeholder="title" value={task.title} onInput={(e) => {
        task.title = (e.target as HTMLInputElement).value;
        setTasks([...tasks])
      }} className="display border rounded p-2 w-full" />
      <textarea placeholder="description" value={task.description} onInput={(e) => {
        task.description = (e.target as HTMLInputElement).value;
        setTasks([...tasks])
      }} className="border rounded p-2 w-full" />
      <input type="checkbox" checked={task.checked} onChange={(e) => {
        task.checked = (e.target as HTMLInputElement).checked;
        setTasks([...tasks])
      }} className="border rounded p-2 w-full" />
    </div>
  )
}
