import React from 'react'
import Select from '../elements/Select'
import Label from '../elements/Label'

type SelectOption = {
    id: string,
    name: string,
    description: string,
}

type SelectGroupProps = {
    name: string
    className?: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string
    options: SelectOption[]
}

export default function SelectGroup({ options, name, value, onChange, onBlur }: SelectGroupProps) {
    return (
        <>
            <Label htmlFor={name} className="capitalize">{name}</Label>
            <Select id={name} name="category" options={options} onChange={onChange} onBlur={onBlur} value={value} />
        </>
    )
}
