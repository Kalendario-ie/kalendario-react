import {ErrorMessage, Field, FieldInputProps, useFormikContext} from 'formik';
import * as React from 'react';
import {DropdownItem, FormFeedback, FormGroup, Label} from 'reactstrap';
import {KFormikInputBaseProps} from 'src/app/shared/components/forms/interfaces';
import {MultiSelectOption} from 'src/app/shared/components/primitives/inputs/interfaces';
import KColorInput from 'src/app/shared/components/primitives/inputs/k-color-input';
import KDurationInput from 'src/app/shared/components/primitives/inputs/k-duration-input';
import KMultiSelectInput from 'src/app/shared/components/primitives/inputs/k-multi-select-input';
import {camelCaseToWords} from 'src/app/shared/util/string-extensions';

export interface KFormikInputProps extends KFormikInputBaseProps {
    options?: MultiSelectOption[];
    multiple?: boolean;
    emptyOption?: boolean;
    as?: string;
}

function inputAs(as: string,
                 options: { id: number; name: string }[] | undefined
): string | React.FunctionComponent<any> {
    switch (as) {
        case 'duration':
            return KDurationInput
        case 'color':
            return KColorInput
        case 'multi-select':
            return (fieldProps: FieldInputProps<any>) =>
                <KMultiSelectInput
                    name={fieldProps.name}
                    value={fieldProps.value}
                    onChange={fieldProps.onChange}
                    onBlur={fieldProps.onBlur}
                    options={options || []}
                />

        default:
            return as;
    }
}

export const KFormikInput: React.FunctionComponent<KFormikInputProps> = (
    {
        name,
        placeholder,
        type,
        options,
        multiple = false,
        emptyOption = true,
        as = 'input'
    }
) => {
    const formik = useFormikContext();
    let className = "form-control";
    const fieldMeta = formik.getFieldMeta(name);
    const fieldHelpers = formik.getFieldHelpers(name);
    className += (fieldMeta.error && fieldMeta.touched) ? ' is-invalid' : '';
    className += multiple ? ' form-select form-control' : '';

    const inputType = React.useMemo(() => inputAs(as, options), [options]);

    const handleOnEmptySelect = () => {
        console.log('onselect')
        fieldHelpers.setValue(null);
    }

    return (
        <FormGroup>
            <Label for={name}>{placeholder || camelCaseToWords(name)}</Label>
            <Field className={className}
                   as={inputType}
                   id={name}
                   name={name}
                   type={type}
                   multiple={multiple}
                   placeholder={placeholder || name}>
                {options &&
                <>
                    {emptyOption && !multiple && <option onClick={handleOnEmptySelect} value=""/>}
                    {options.map((option) =>
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

