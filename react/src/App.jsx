import { useState } from "react";
import Calculator from "./Calculator";
import Todo from "./Todo";

function App() {
  const [menu, setMenu] = useState("crud");
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  function addItem() {
    setItems([...items, {
      id: Date.now(),
      name: input
    }]);

    setInput("");
  }

  function deleteItem(id) {
    setItems(items.filter(item => item.id !== id));
  }

  return (
    <div>
      <h1>React CRUD + SPA</h1>

      <button onClick={() => setMenu("crud")}>CRUD</button>
      <button onClick={() => setMenu("calculator")}>Calculator</button>
      <button onClick={() => setMenu("todo")}>Todo</button>

      {
        menu === "crud" && (
          <div>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={addItem}>Hozzáadás</button>

            <ul>
              {
                items.map(item => (
                  <li key={item.id}>
                    {item.name}

                    <button onClick={() => deleteItem(item.id)}>
                      Törlés
                    </button>
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }

      {
        menu === "calculator" && <Calculator />
      }

      {
        menu === "todo" && <Todo />
      }
    </div>
  );
}

export default App;