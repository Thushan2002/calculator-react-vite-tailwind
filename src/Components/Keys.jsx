import React from "react";

const Keys = ({ label, keyClass }) => {
  const equalClass =
    "col-[span_2] bg-green-900 text-white-500 font-semibold hover:bg-green-700";

  return (
    <div
      className={`bg-blue-950 flex cursor-pointer items-center justify-center p-4 rounded-[5px] hover:bg-blue-800 ${
        keyClass && equalClass
      }`}>
      {label}
    </div>
  );
};

export default Keys;
