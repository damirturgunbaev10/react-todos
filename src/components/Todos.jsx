import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px",
        borderBottom: "1px solid #ddd",
        background: "white",
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        readOnly
        style={{ marginRight: "15px" }}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.title}
      </span>
    </div>
  );
};

export default TodoItem;
