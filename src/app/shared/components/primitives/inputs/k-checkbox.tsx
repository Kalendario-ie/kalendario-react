import React from 'react';
import {Input, Label} from 'reactstrap';
import {KBaseInputProps} from 'src/app/shared/components/primitives/inputs/interfaces';

interface KCheckboxProps extends KBaseInputProps {
}

export const KCheckbox: React.FunctionComponent<KCheckboxProps> = (
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
