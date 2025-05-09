import {useEffect, useState} from "react";

export type Task = {
  title: string;
  description: string;
  checked: boolean;
}
export function useTasks() {

  const [tasks, setTasks] = useState<Task[]>([])
  useEffect(() => {
    const localData = localStorage.getItem('tasks');
    if (localData) setTasks(JSON.parse(localData))
  },[])


  return [
    tasks,
    (newTasks: Task[]) => {
      localStorage.setItem('tasks', JSON.stringify(newTasks))
      setTasks(newTasks)
    }
  ] as const
}
