import moment, {Moment} from 'moment';
import React from 'react';
import {Input} from 'reactstrap';

interface KDateInputProps {
    value?: Moment;
    onChange?: (value: Moment) => void;
}

const KDateInput: React.FunctionComponent<KDateInputProps> = (
    {
        value,
        onChange
    }) => {
    return (
        <Input type='date'
               value={value && value.format('YYYY-MM-DD')}
               onChange={event => onChange && onChange(moment.utc(event.target.value))}/>
    )
}


export default KDateInput;
