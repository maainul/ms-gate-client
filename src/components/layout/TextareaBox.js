import React from 'react'

const TextArea = ({ title, name, id, borderColor, placeholder }) => {
    return (
        <div className="col-span-full mt-2">
            <div className='flex items-center gap-3'>
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                    {title}
                </label>
                <p className="text-sm leading-6 text-gray-600">Please Write full address</p>
            </div>
            <div className="mt-2">
                <textarea
                    id={id}
                    name={name}
                    rows={3}
                    className={`${borderColor} w-full rounded-md px-2 py-1.5 outline-none placeholder:text-gray-300`}
                    placeholder={placeholder}
                />
            </div>

        </div>
    )
}

export default TextArea
