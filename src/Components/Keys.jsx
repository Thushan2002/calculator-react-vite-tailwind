import React from "react";

const Keys = ({ label, keyClass, onButtonClick }) => {
  return (
    <div
      className={`bg-blue-950 flex cursor-pointer items-center justify-center p-4 rounded-[5px] hover:bg-blue-800 ${
        keyClass === "="
          ? "col-span-2 bg-green-900 text-white font-semibold hover:bg-green-700"
          : ""
      }`}
      onClick={() => onButtonClick(label)}>
      {label}
    </div>
  );
};

export default Keys;
