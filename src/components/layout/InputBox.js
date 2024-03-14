import React from 'react'

const InputBox = ({ title, name, id, borderColor, type }) => {
    return (
        <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 mt-1">
                {title}
            </label>
            <div className="mt-2">
                <input
                    type={type}
                    name={name}
                    id={id}
                    autoComplete="given-name"
                    placeholder='Enter Vehicle Name'
                    className={`${borderColor} w-full rounded-md px-2 py-1.5 outline-none placeholder:text-gray-300`}
                />
            </div>
        </div >
    )
}

export default InputBox
