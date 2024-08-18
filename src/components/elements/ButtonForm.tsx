type ButtonFormProps = {
    children: React.ReactNode
    type: 'submit' | 'reset' | 'button'
    className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function ButtonForm({ children, type, className, ...props }: ButtonFormProps) {
    return <button type={type} className={`px-5 py-2 text-white bg-blue-600 ${className}`} {...props}>{children}</button>
}
