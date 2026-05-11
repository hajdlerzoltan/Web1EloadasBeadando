import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function addTask() {
    setTasks([...tasks, input]);
    setInput("");
  }

  return (
    <div>
      <h2>Todo App</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTask}>Felvétel</button>

      <ul>
        {
          tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default Todo;