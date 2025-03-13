import React from "react";

const Input = ({ className, ...props }) => {
  return (
    <input
      className={`p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black outline-none ${className}`}
      {...props}
    />
  );
};

export default Input;
