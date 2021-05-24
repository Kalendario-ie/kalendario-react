import {ErrorMessage, Field, useFormikContext} from 'formik';
import {FieldProps} from 'formik/dist/Field';
import * as React from 'react';
import {FormFeedback, FormGroup} from 'reactstrap';
import {KFormikInputBaseProps} from 'src/app/shared/components/forms/interfaces';
import {KBaseInputProps} from 'src/app/shared/components/primitives/inputs/interfaces';
import KColorInput from 'src/app/shared/components/primitives/inputs/k-color-input';
import KDurationInput from 'src/app/shared/components/primitives/inputs/k-duration-input';

export interface KFormikInputProps extends KFormikInputBaseProps {
    selectOptions?: { id: number, name: string }[];
    multiple?: boolean;
    emptyOption?: boolean;
    as?: string;
}

function inputAs(value: string): string | React.FunctionComponent<any> {
    switch (value) {
        case 'duration':
            return KDurationInput
        case 'color':
            return KColorInput
        default:
            return value;
    }
}

export const KFormikInput: React.FunctionComponent<KFormikInputProps> = (
    {
        name,
        placeholder,
        type,
        selectOptions,
        multiple = false,
        emptyOption = true,
        as = 'input'
    }) => {
    const formik = useFormikContext();
    let className = "form-control";
    const fieldMeta = formik.getFieldMeta(name);
    className += (fieldMeta.error && fieldMeta.touched) ? ' is-invalid' : '';
    className += multiple ? ' form-select form-control' : '';

    return (
        <FormGroup>
            <Field className={className}
                   as={selectOptions ? 'select' : inputAs(as)}
                   name={name}
                   type={type}
                   multiple={multiple}
                   onKeyUp={onchange}
                   placeholder={placeholder || name}>
                {selectOptions &&
                <>
                    {emptyOption && !multiple && <option value={0}/>}
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

