import React from 'react';

type LabelProps = {
    children: React.ReactNode
    htmlFor: string
    className?: string
} & React.LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({ children, htmlFor, className, ...props }: LabelProps) {
    return (
        <label htmlFor={htmlFor} className={`${className} block text-sm font-medium text-gray-700 mb-1`} {...props}>
            {children}
        </label>
    );
}
