

import React from "react";

function Task({ text, category, onDelete }) {
  // Check if props are provided
  if (!text || !category) {
    return null;
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onDelete(text)}>
        X
      </button>
    </div>
  );
}

export default Task;
