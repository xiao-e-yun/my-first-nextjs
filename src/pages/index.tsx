'use client'

import {useState} from "react";
import {useTasks} from "@/utils";
import {TaskList} from "@/app/components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useTasks()
  const [newTask, setNewTask] = useState("")

  return (
      <div className="flex flex-col gap-4 m-4">
        <div className="flex gap-2 border rounded p-2">
          <input
            type="text"
            placeholder="New Task"
            className="w-full"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="text-nowrap border rounded px-2" onClick={() => {
            if (newTask.trim() === "") return
            setTasks([...tasks, {title: newTask, description: "", checked: false}])
            setNewTask("")
          }}>Add</button>

        </div>

        <div className="flex flex-col gap-4">
          <TaskList tasks={tasks} onDelete={(remove) => setTasks(tasks.filter((_, i) => i != remove))} />
        </div>
      </div>
  );
}
