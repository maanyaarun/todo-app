import React from "react";

function TaskItem({ task, index, onEdit, onDelete }) {
  return (
    <li className="task-item">
      <span>{task}</span>
      <div>
        <button className="edit-btn" onClick={() => onEdit(index)}>✏️ Edit</button>
        <button className="delete-btn" onClick={() => onDelete(index)}>🗑️ Delete</button>
      </div>
    </li>
  );
}

export default TaskItem;
