import React from 'react';

const Input = ({ title, name, id, borderColor, type, placeholder, value, onChange }) => {
    const handleChange = (event) => {
        const { value } = event.target
        onChange(value)
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
                    value={value}
                    placeholder={placeholder}
                    className={`${borderColor} w-full rounded-md px-2 py-1.5 outline-none placeholder:text-gray-300`}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default Input;
