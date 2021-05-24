import React from 'react';
import {Input, Label} from 'reactstrap';
import {KBaseInputProps} from 'src/app/shared/components/primitives/inputs/interfaces';

interface KCheckboxProps extends KBaseInputProps {
}

const KCheckbox: React.FunctionComponent<KCheckboxProps> = (
    {
        placeholder,
        checked,
        onChange,
        onBlur
    }) => {
    return (
        <Label check>
            <Input type="checkbox"
                   onChange={onChange}
                   onBlur={onBlur}
                   checked={checked}
            />
            {placeholder}
        </Label>
    )
}


export default KCheckbox;
