import {ErrorMessage, Field, useFormikContext} from 'formik';
import * as React from 'react';
import {ChangeEvent} from 'react';
import {FormFeedback, FormGroup} from 'reactstrap';
import {KFormikForm} from 'src/app/shared/components/forms/k-formik-form';

export interface KFormikInputProps {
    name: string;
    type?: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent) => void;
    selectOptions?: { id: number, name: string }[];
    multiple?: boolean;
    emptyOption?: boolean;
}

export const KFormikInput: React.FunctionComponent<KFormikInputProps> = (
    {
        name,
        placeholder,
        type,
        selectOptions,
        multiple = false,
        emptyOption = true
    }) => {
    const formik = useFormikContext();
    let className = "form-control";
    const fieldMeta = formik.getFieldMeta(name);
    className += (fieldMeta.error && fieldMeta.touched) ? ' is-invalid' : '';
    className += multiple ? ' form-select form-control' : '';
    return (
        <FormGroup>
            <Field className={className}
                   as={selectOptions ? 'select' : 'input'}
                   name={name}
                   type={type}
                   multiple={multiple}
                   onKeyUp={onchange}
                   placeholder={placeholder || name}>
                {selectOptions &&
                <>
                    {emptyOption && !multiple && <option value={0}></option>}
                    {selectOptions.map((option) =>
                        <option key={option.id} value={option.id}>{option.name}</option>)
                    }
                </>
                }
            </Field>
            <FormFeedback>
                <ErrorMessage name={name}/>
            </FormFeedback>
        </FormGroup>
    )
}

