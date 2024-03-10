import { useState } from 'react';
import TaskItem  from './TaskItem';
import { useLocalStorage } from '../utils/useLocalStorage';
interface Task {
    id: number;
    text: string;
    completed: boolean;
}
const default_tasks: Task[] = [
    {
    id: 1,
    text: 'Doctor Appointment',
    completed: true
    },
    {
    id: 2,
    text: 'Meeting at School',
    completed: false
    }
    ];
function TaskMang() {
    const [tasks, setTasks]  = useLocalStorage('tasks', default_tasks);
    
    const [text, setText] = useState('');
   function addTask(text: string) {
    const newTask = {
    id: Date.now(),
    text,
    completed: false
    };
    setTasks([...tasks, newTask]);
    setText('');
    }
   function deleteTask(id: number) {
    setTasks(tasks.filter(task => task.id !== id));
    }
   function toggleCompleted(id: number) {
    setTasks(tasks.map(task => {
        if (task.id === id) {
            return {...task, completed: !task.completed};
        } else {
            return task;
        } 
        }));
    }
   return (
    <div className="todo-list">
    {tasks.map(task => (
    <TaskItem
    key={task.id} 
    task={task}
    deleteTask={deleteTask}
    toggleCompleted={toggleCompleted} 
    />
    ))}
   <input
    value={text}
    onChange={e => setText(e.target.value)} 
    />
   <button onClick={() => addTask(text)}>Add</button>
    </div>
    );
   }
   export default TaskMang;