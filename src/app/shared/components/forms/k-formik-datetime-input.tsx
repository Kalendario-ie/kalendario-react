import {useFormikContext} from 'formik';
import {Moment} from 'moment';
import React from 'react';
import Datetime from 'react-datetime';
import {FormGroup} from 'reactstrap';
import {momentToIso, stringToMoment} from 'src/app/shared/util/moment-helpers';

interface KDatetimeInput {
    name: string
}

const KFormikDatetimeInput: React.FunctionComponent<KDatetimeInput> = (
    {
        name,
    }) => {
    const formik = useFormikContext();

    const handleDateChange = (e: Moment | string) => {
        formik.getFieldHelpers(name).setValue(momentToIso(e as Moment));
    }

    return (
        <FormGroup>
            <Datetime
                inputProps={{
                    name: name,
                    className: 'form-control',
                }}
                initialValue={stringToMoment(formik.getFieldProps(name).value)}
                onChange={handleDateChange}
            />
        </FormGroup>
    )
}


export default KFormikDatetimeInput;
