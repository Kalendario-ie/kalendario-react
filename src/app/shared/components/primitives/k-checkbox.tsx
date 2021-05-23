import React, {useState} from 'react';
import {Input, Label} from 'reactstrap';

interface KCheckboxProps {
    label: string;
    onChange: () => void;
    initialValue: boolean;
}

const KCheckbox: React.FunctionComponent<KCheckboxProps> = (
    {
        label,
        initialValue,
        onChange
    }) => {
    const [isChecked, setIsChecked] = useState(initialValue);

    const handleChange = () => {
        setIsChecked(!isChecked);
        onChange();
    }

    return (
        <Label check>
            <Input type="checkbox"
                   onChange={handleChange}
                   checked={isChecked}
            />
            {label}
        </Label>
    )
}


export default KCheckbox;
