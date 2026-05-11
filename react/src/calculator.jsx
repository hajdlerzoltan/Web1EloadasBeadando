import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div>
      <h2>Calculator</h2>

      <input
        type="number"
        onChange={(e) => setNum1(Number(e.target.value))}
      />

      <input
        type="number"
        onChange={(e) => setNum2(Number(e.target.value))}
      />

      <button onClick={() => setResult(num1 + num2)}>
        +
      </button>

      <h3>Eredmény: {result}</h3>
    </div>
  );
}

export default Calculator;