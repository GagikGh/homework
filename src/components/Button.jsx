import React from 'react';

function Button({onClick}) {
  return (
    <button className="task-button" onClick={onClick}>+</button>
  );
}

export default Button
