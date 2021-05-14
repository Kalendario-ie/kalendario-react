import React, {ChangeEventHandler} from 'react';
import {Input} from 'reactstrap';
import {InputType} from 'reactstrap/es/Input';

interface KInputProps {
    type?: InputType;
    value?: string | ReadonlyArray<string> | number;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const KInput: React.FunctionComponent<KInputProps> = (
    {
        type,
        value,
        onChange
    }) => {
    return (
        <Input type={type}
               value={value}
               onChange={onChange}/>
    )
}


export default KInput;
