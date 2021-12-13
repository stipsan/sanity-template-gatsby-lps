import React from "react";

export default function ValidationBox({ message, className }) {
  return (
    <span
      className={`text-red-500 absolute -top-4 right-1 px-2 bg-white rounded-sm border-red-500 border-solid border-2 ${className}`}
    >
      {message}
    </span>
  );
}
