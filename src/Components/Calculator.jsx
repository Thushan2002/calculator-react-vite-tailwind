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
    "EQUALS",
  ];

  const [showResults, setShowResults] = useState(false);

  const resultClass = "text-[1.7rem]";
  const operationClass =
    "text-[1.2rem] tracking-[2px] flex gap-[5px] items-center text-[rgba(255,2255,255,0.5)] justify-end";
  return (
    <div className="min-w-[320px] bg-gray-900 flex flex-col gap-4 p-4 rounded-2xl">
      <div className="overflow-x-auto bg-blue-400 min-h-[50px] flex items-end justify-end px-4 py-2 rounded-[10px]">
        <div className={`${showResults ? resultClass : operationClass}`}>
          {display}
        </div>
      </div>
      <div className="grid grid-cols-[repeat(4,1fr)] gap-[.3rem]">
        {keys.map((item, index) => (
          <Keys
            label={item}
            key={index}
            keyClass={item === "EQUALS" && "equals"}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
