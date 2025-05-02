'use client'

export const TaskList  = ({tasks, setTasks}:{
tasks: string[];   setTasks: (person: string[]) => void;
} ) => {
  if (tasks.length === 0) return <p>No tasks available</p>

  return tasks.map((task, index) => (
    <div key={index} className="flex flex-wrap gap-2 border rounded p-2">
      <input type="checkbox" />
      <span>{task}</span>
      <div className="w-full">
        <button onClick={() => setTasks(tasks.filter((_, i) => i !== index))} className="float-right border rounded px-2">Delete</button>
      </div>
    </div>
  ))

}
