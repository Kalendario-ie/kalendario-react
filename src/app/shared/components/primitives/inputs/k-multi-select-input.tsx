import {FieldInputProps} from 'formik';
import React, {ChangeEvent, useState} from 'react';
import {FormGroup} from 'reactstrap';
import {KBaseInputProps, MultiSelectOption} from 'src/app/shared/components/primitives/inputs/interfaces';
import KCheckbox from 'src/app/shared/components/primitives/inputs/k-checkbox';
import KCard from 'src/app/shared/molecules/k-card';
import KTreeView from 'src/app/shared/molecules/k-tree-view';
import KIconButton from '../k-icon-button';

// @ts-ignore
interface KMultiSelectProps extends KBaseInputProps {
    name: string;
    value: number[];
    options: MultiSelectOption[];
}

const KMultiSelectInput: React.FunctionComponent<KMultiSelectProps> = (
    {
        name,
        value,
        options,
        onChange,
        onBlur,
    }) => {
    const values = new Set<number>(value);

    const handleCheckboxChange = (option: MultiSelectOption) => (e: ChangeEvent<HTMLInputElement>) => {
        if (option.children && isOptionChecked(option)) {
            option.children.forEach(option => values.delete(option.id));
        } else if (option.children) {
            option.children.forEach(option => values.add(option.id));
        } else if (values.has(option.id)) {
            values.delete(option.id);
        } else {
            values.add(option.id);
        }
        onChange && onChange({...e, target: {...e.target, name, value: Array.from(values)}});
    }

    const isOptionChecked = (option: MultiSelectOption) => {
        return !option.children ? values.has(option.id) : option.children.every(option => values.has(option.id));
    }

    return (
        <KCard hasShadow={false}
               maxHeight={30}
               mhUnit={'vh'}
               header={name}
        >
            <KTreeView items={options}
                       renderComponent={(option) =>
                           <FormGroup check>
                               <KCheckbox placeholder={option.name}
                                          name={name}
                                          onBlur={onBlur}
                                          onChange={handleCheckboxChange(option)}
                                          checked={isOptionChecked(option)}
                               />
                           </FormGroup>
                       }
            />
        </KCard>
    )
}


export default KMultiSelectInput;
