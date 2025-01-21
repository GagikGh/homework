import React, { useState } from 'react';
import Task from './components/Task';

function App(){
  const [table,setTable] = useState([
    { id: 1, title: "Math Homework", details: ["Algebra", "Geometry"],showDetails: false },
    { id: 2, title: "Science Project", details: ["Research", "Presentation"],showDetails: false },
    { id: 3, title: "History Reading", details: ["Chapter 3", "Chapter 4"],showDetails: false },
  ]);

  const handleClick = function (id) {
    setTable(prevTable =>
      prevTable.map(task =>
        task.id === id ? { ...task, showDetails: !task.showDetails } : task
      )
    );
  };

  return(
    <>
      <h2>Table</h2>
      {table.map((task) => {
        return (<Task
           key={task.id}
           task={task}
           handleClick={() => handleClick(task.id)}/>)})} 
    </>
  )
}

export default App


