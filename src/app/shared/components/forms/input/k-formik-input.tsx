import * as React from 'react';
import {ErrorMessage, Field, useFormikContext} from 'formik';
import {FormFeedback, FormGroup} from 'reactstrap';
import {ChangeEvent} from 'react';

export interface KInputProps {
    name: string;
    type?: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent) => void;
}

const KFormikInput: React.FunctionComponent<KInputProps> = (
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
                   onKeyUp={onchange}
                   placeholder={placeholder || name}/>
            <FormFeedback>
                <ErrorMessage name={name}/>
            </FormFeedback>
        </FormGroup>
    )
}

export default KFormikInput;
