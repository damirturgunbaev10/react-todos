import React, { useState, useEffect } from "react";
import TodosList from "./components/TodosList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Todo List</h1>
      <TodosList todos={todos} />
    </div>
  );
}

export default App;
