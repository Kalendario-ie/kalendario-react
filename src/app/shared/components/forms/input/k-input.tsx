import * as React from 'react';
import {ErrorMessage, Field, useFormikContext} from 'formik';
import {FormFeedback, FormGroup} from 'reactstrap';

export interface KInputProps {
    name: string;
    type?: string;
    placeholder?: string;
}

const KInput: React.FunctionComponent<KInputProps> = (
    {name,
        placeholder,
        type
    }) => {
    const formik = useFormikContext();
    let className = "form-control";
    const fieldMeta = formik.getFieldMeta(name);
    if (fieldMeta.error && fieldMeta.touched) {
        className += " is-invalid";
    }
    return (
        <FormGroup>
            <Field className={className}
                   name={name}
                   type={type}
                   placeholder={placeholder || name}/>
            <FormFeedback>
                <ErrorMessage name={name}/>
            </FormFeedback>
        </FormGroup>
    )
}

export default KInput;
