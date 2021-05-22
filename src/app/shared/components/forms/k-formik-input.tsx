import {ErrorMessage, Field, useFormikContext} from 'formik';
import * as React from 'react';
import {ChangeEvent} from 'react';
import {FormFeedback, FormGroup} from 'reactstrap';

export interface KFormikInputProps {
    name: string;
    type?: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent) => void;
    selectOptions?: { id: number, name: string }[];
    emptyOption?: boolean;
}

export const KFormikInput: React.FunctionComponent<KFormikInputProps> = (
    {
        name,
        placeholder,
        type,
        selectOptions,
        emptyOption= true
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
                   as={selectOptions ? 'select' : 'input'}
                   name={name}
                   type={type}
                   onKeyUp={onchange}
                   placeholder={placeholder || name}>
                {selectOptions &&
                    <>
                        {emptyOption && <option value={undefined}></option>}
                        {selectOptions.map(option => <option value={option.id}>{option.name}</option>)}
                    </>
                }
            </Field>
            <FormFeedback>
                <ErrorMessage name={name}/>
            </FormFeedback>
        </FormGroup>
    )
}

