import React, { useState } from 'react';

const Input = ({ title, name, id, borderColor, type, placeholder, value }) => {
    const [inputValue, setInputValue] = useState(value);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="sm:col-span-3">
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900 mt-1">
                {title}
            </label>
            <div className="mt-2">
                <input
                    id={id}
                    type={type}
                    name={name}
                    autoComplete="given-name"
                    value={inputValue}
                    placeholder={placeholder}
                    className={`${borderColor} w-full rounded-md px-2 py-1.5 outline-none placeholder:text-gray-300`}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default Input;
