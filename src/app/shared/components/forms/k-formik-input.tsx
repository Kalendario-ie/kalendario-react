import {ErrorMessage, Field, useFormikContext} from 'formik';
import * as React from 'react';
import {ChangeEvent} from 'react';
import {FormFeedback, FormGroup} from 'reactstrap';

export interface KFormikInputProps {
    name: string;
    type?: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent) => void;
}

export const KFormikInput: React.FunctionComponent<KFormikInputProps> = (
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

