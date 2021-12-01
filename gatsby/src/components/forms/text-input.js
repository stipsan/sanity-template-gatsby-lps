import React from 'react';
  
export default function TextInput({name, placeholder, classNames}) {
    return (
        <input
            name={name}
            ref={name}
            type="text"
            className={`mb-4 rounded-sm w-full ${classNames}`}
            placeholder={placeholder}
        />
    );
}



