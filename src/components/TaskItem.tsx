import React from 'react';
import './TaskItem.css';
interface TaskProps {
    id: number;
    text: string;
    completed: boolean;
}
function TaskItem({task, deleteTask, toggleCompleted}: { task: TaskProps, deleteTask:any, toggleCompleted: any }) {
function handleChange() {
  toggleCompleted(task.id);
 }
//  let renderClass = task.completed ? "completed" : "process";
 return (
 <div className="todo-item">
 <input 
 type="checkbox"
 checked={task.completed}
 onChange={handleChange}
 />
<p className={task.completed? "completed" : "process"}>{task.text}</p>
<button onClick={() => deleteTask(task.id)}>
 X
 </button>
 </div>
 );
}
export default TaskItem;