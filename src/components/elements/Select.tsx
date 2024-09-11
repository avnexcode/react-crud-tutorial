import { Category } from "../../types";

type SelectProps = {
    id: string;
    name: string;
    options?: Category[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
    value?: string | number;
    placeholder?: string;
    className?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({ id, name, options, onChange, onBlur, value, placeholder = 'Select an option', className = 'mb-2', ...props }: SelectProps) {
    return <select
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={`${className} w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out appearance-none bg-white`}
        {...props}
    >
        <option value="">{placeholder}</option>
        {options?.map((option) => (
            <option key={option.id} value={option.id}>
                {option.name}
            </option>
        ))}
    </select>
}
