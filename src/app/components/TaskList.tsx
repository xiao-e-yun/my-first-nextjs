'use client'

import {Task} from "@/utils";
import Link from "next/link";
import {FC} from "react";

type Args = {
  tasks: Task[];
  onDelete: (index: number) => void;
};

export const TaskList: FC<Args> = ({tasks, onDelete}) => {
  if (tasks.length === 0) return <p>No tasks available</p>

  return tasks.map((task, index) => (
      <Link href={`/tasks/${index}`} key={index} className="flex flex-wrap gap-2 border rounded p-2">
      <input type="checkbox" disabled checked={task.checked} />
      <span>{task.title}</span>
      <span className="w-full">{task.description}</span>
      <div className="w-full">
        <button onClick={()=>onDelete(index)} className="float-right border rounded px-2">Delete</button>
      </div>
    </Link>
  ))

}
