import React from 'react';

type InputProps = {
    id: string
    name: string
    className?: string
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ id, name, className, ...props }: InputProps) {
    return (
        <input
            type="text"
            id={id}
            name={name}
            className={`${className} w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out`}
            {...props}
            autoComplete='off'
        />
    );
}
