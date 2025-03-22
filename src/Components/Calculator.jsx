import React, { useState } from "react";
import Keys from "./Keys";

const Calculator = () => {
  const keys = [
    "AC",
    "C",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    ".",
    "0",
    "=",
  ];

  const [showResults, setShowResults] = useState(false);
  const [display, setDisplay] = useState("");

  const calculateResult = () => {
    if (display.length !== 0) {
      try {
        let calcResult = Function("return " + display)(); // Safe eval alternative
        calcResult = parseFloat(calcResult.toFixed(3)); // Limit decimals
        setDisplay(calcResult.toString());
        setShowResults(true);
      } catch (error) {
        setDisplay("Error");
      }
    }
  };

  const handleButton = (value) => {
    if (value === "AC") {
      setDisplay("");
    } else if (value === "C") {
      setDisplay(display.slice(0, -1));
    } else if (isOperator(value)) {
      if (display === "" || isOperator(display[display.length - 1])) return;
      setDisplay(display + value);
    } else if (value === "=") {
      calculateResult();
    } else {
      setDisplay(display + value);
    }
    setShowResults(false);
  };

  const isOperator = (char) => {
    return ["+", "-", "*", "/", "%"].includes(char);
  };

  return (
    <div className="min-w-[320px] bg-gray-900 flex flex-col gap-4 p-4 rounded-2xl">
      <div className="overflow-x-auto bg-blue-400 min-h-[50px] flex items-end justify-end px-4 py-2 rounded-[10px]">
        <div
          className={
            showResults
              ? "text-[1.7rem]"
              : "text-[1.2rem] tracking-[2px] flex gap-[5px] items-center text-[rgba(255,255,255,0.5)] justify-end"
          }>
          {display}
        </div>
      </div>
      <div className="grid grid-cols-[repeat(4,1fr)] gap-[.3rem]">
        {keys.map((item, index) => (
          <Keys
            label={item}
            key={index}
            keyClass={item === "=" ? "=" : ""}
            onButtonClick={handleButton}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
