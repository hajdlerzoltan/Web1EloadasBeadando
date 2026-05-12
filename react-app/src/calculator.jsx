import { useState } from "react";

function Calculator() {

    const [num1, setNum1] = useState("");

    const [num2, setNum2] = useState("");

    const [result, setResult] = useState(0);

    function add() {

        setResult(Number(num1) + Number(num2));
    }

    function subtract() {

        setResult(Number(num1) - Number(num2));
    }

    function multiply() {

        setResult(Number(num1) * Number(num2));
    }

    function divide() {

        setResult(Number(num1) / Number(num2));
    }

    return (

        <div>

            <h2>Calculator</h2>

            <input
                type="number"
                placeholder="Első szám"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />

            <input
                type="number"
                placeholder="Második szám"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />

            <div>

                <button onClick={add}>+</button>

                <button onClick={subtract}>-</button>

                <button onClick={multiply}>*</button>

                <button onClick={divide}>/</button>

            </div>

            <h3>Eredmény: {result}</h3>

        </div>
    );
}

export default Calculator;