import React, { useState, useEffect } from "react";
import TodosLists from "./components/TodosList";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=15")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
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

      {isLoading ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <div
            className="loader"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          >
            Loading tasks...
          </div>
        </div>
      ) : (
        <TodosLists todos={todos} />
      )}
    </div>
  );
}

export default App;
