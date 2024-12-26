import Button from "./components/Button";
import List from "./components/ListTask";
import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([
    { name: "Task-1", isChecked: false, isDoubleClicked: false},
    { name: "Task-2", isChecked: false, isDoubleClicked: false},
    { name: "Task-3", isChecked: false, isDoubleClicked: false}
  ]);
  const [newTask, setNewTask] = useState('');

  const handleDelete = (taskName) => {
    setTasks(tasks.filter(task => task.name !== taskName));
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { name: newTask, isChecked: false }]);
      setNewTask('');
    }
  };

  const toggleCheckbox = (taskName) => {
    setTasks(tasks.map(task => 
      task.name === taskName ? { ...task, isChecked: !task.isChecked } : task));
  };

  return (
    <div className="container">
      <h1>TO DO List</h1>
      <div className="enterTask">
        <input 
          className="list" 
          type="text" 
          placeholder="Enter a task" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />
        <Button name="Add Task" handleClick={addTask} />
      </div>
      
      {tasks.map((task, index) => (
        <List 
          key={index}  
          task={task.name} 
          handleDelete={() => handleDelete(task.name)} 
          isChecked={task.isChecked} 
          setIsChecked={() => toggleCheckbox(task.name)}         
        />
      ))}
    </div>
  );
}

export default Todo;


