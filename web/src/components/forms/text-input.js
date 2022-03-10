import React from 'react';

export default function TextInput({
  name,
  placeholder,
  updateField,
  value,
  classNames = '',
}) {
  return (
    <input
      name={name}
      value={value}
      type="text"
      className={`mb-4 w-full border-none ${classNames}`}
      placeholder={placeholder}
      onChange={(event) => updateField(event)}
    />
  );
}
