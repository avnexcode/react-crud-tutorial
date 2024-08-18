import Input from "../elements/Input";
import Label from "../elements/Label";
import { ChangeEventHandler } from "react";

type InputGroupProps = {
    name: string;
    className?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: string | number
}

export default function InputGroup({ name, className, onChange, value }: InputGroupProps) {
    return (
        <div className={`${className}`}>
            <Label htmlFor={name} className="capitalize">{name}</Label>
            <Input id={name} name={name} className="min-w-[28rem]" onChange={onChange} value={value}/>
        </div>
    );
}
