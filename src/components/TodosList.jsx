import React from "react";
import Todos from "./Todos";

const TodoList = ({ todos }) => {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      {todos.map((todo) => (
        <Todos key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
