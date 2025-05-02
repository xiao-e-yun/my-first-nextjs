'use client'

import {useEffect, useState} from "react";
import {TaskList} from "./components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([])

  useEffect(() => {
    const localData = localStorage.getItem('userData');
    if (localData) setTasks(JSON.parse(localData))
  },[])

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(tasks))
  }, [tasks])

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
          setTasks([...tasks, newTask])
          setNewTask("")
        }}>Add</button>

      </div>

      <div className="flex flex-col gap-4">
        {TaskList({tasks, setTasks})}
      </div>
    </div>
  );
}
