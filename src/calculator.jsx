import React, { useState } from "react";
import "./calculator.css"; // For styling

const Calculator = () => {
  const [input, setInput] = useState("");

  // Safely evaluate mathematical expressions
  const evaluateExpression = (expression) => {
    try {
      // Handle square root and square specifically
      if (expression.includes("sqrt")) {
        return Math.sqrt(parseFloat(expression.replace("sqrt", "")));
      } else if (expression.includes("^2")) {
        return Math.pow(parseFloat(expression.replace("^2", "")), 2);
      }

      // Use the Function constructor for other calculations
      const result = new Function(`return ${expression}`)();
      return result;
    } catch {
      return "Error";
    }
  };

  // Handle button clicks
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Clear the input
  const handleClear = () => {
    setInput("");
  };

  // Calculate the result
  const handleCalculate = () => {
    const result = evaluateExpression(input);
    setInput(result.toString());
  };

  return (
    <div className="calculator">
      <h1>Simple Calculator</h1>
      <input type="text" value={input} readOnly className="calculator-input" />
      <div className="calculator-buttons">
        {/* Number Buttons */}
        {[...Array(10).keys()].map((number) => (
          <button key={number} onClick={() => handleClick(number.toString())}>
            {number}
          </button>
        ))}
        {/* Operator Buttons */}
        {["+", "-", "*", "/"].map((operator) => (
          <button key={operator} onClick={() => handleClick(operator)}>
            {operator}
          </button>
        ))}
        {/* Special Buttons */}
        <button onClick={handleClear} className="clear-button">
          Clear
        </button>
        <button onClick={handleCalculate} className="equal-button">
          =
        </button>
        {/* New Square and Square Root Buttons */}
        <button onClick={() => handleClick("^2")} className="square-button">
          x²
        </button>
        <button onClick={() => handleClick("sqrt")} className="sqrt-button">
          √
        </button>
      </div>
    </div>
  );
};

export default Calculator;
