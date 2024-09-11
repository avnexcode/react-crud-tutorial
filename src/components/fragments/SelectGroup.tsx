import React from 'react'
import Select from '../elements/Select'
import Label from '../elements/Label'
import { Category } from '../../types'

type SelectGroupProps = {
    name: string
    className?: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value?: number | string
    options?: Category[]
}

export default function SelectGroup({ options, name, value, onChange, onBlur }: SelectGroupProps) {
    return (
        <>
            <Label htmlFor={name} className="capitalize">{name}</Label>
            <Select id={name} name={name} options={options} onChange={onChange} onBlur={onBlur} value={value} />
        </>
    )
}
