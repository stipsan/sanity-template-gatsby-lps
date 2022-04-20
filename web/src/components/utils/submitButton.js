import React from 'react';

export default function SubmitButton({ text, className }) {
  return (
    <input
      className={`uppercase rounded-lg px-8 py-2 text-2xl font-extrabold cursor-pointer ${className}`}
      type="submit"
      value={text}
    />
  );
}
