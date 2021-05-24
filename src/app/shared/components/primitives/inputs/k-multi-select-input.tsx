import React, {ChangeEvent} from 'react';
import {FormGroup} from 'reactstrap';
import {KBaseInputProps} from 'src/app/shared/components/primitives/inputs/interfaces';
import KCheckbox from 'src/app/shared/components/primitives/inputs/k-checkbox';
import KCard from 'src/app/shared/molecules/k-card';

// @ts-ignore
interface KMultiSelectProps extends KBaseInputProps {
    name: string;
    value: number[];
    options: { id: number, name: string }[];
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

    const handleCheckboxChange = (id: number)  => (e: ChangeEvent<HTMLInputElement>) => {
        if (values.has(id)) {
            values.delete(id);
        } else {
            values.add(id);
        }
        onChange && onChange({...e, target: {...e.target, name, value: Array.from(values)}});
    }


    return (
        <KCard hasShadow={false}
               maxHeight={30}
               mhUnit={'vh'}
               header={name}
               bodiless={true}
        >
            <ul className="ul-none">
                {options.map(option =>
                    <li key={option.id}>
                        <FormGroup check>
                            <KCheckbox placeholder={option.name}
                                       name={name}
                                       onChange={handleCheckboxChange(option.id)}
                                       onBlur={onBlur}
                                       checked={values.has(option.id)}
                            />
                        </FormGroup>
                    </li>
                )}
            </ul>
        </KCard>
    )
}


export default KMultiSelectInput;
