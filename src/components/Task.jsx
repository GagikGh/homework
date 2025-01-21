import React from 'react';
import Button from './Button';

function Task({ task, handleClick}) {
  return (
    <>
        <div className="task-container">
        <h3 className="task-title">{task.title}</h3>
        <Button onClick={handleClick}/>
        </div>

        {task.showDetails && (
            task.details.map((detail, index) => {
                return (
                    <div className='details' key={index}>
                        <p className="task-title">{detail}</p>
                    </div>
                )
            })
        )}
        </>
    );
    
}

export default Task