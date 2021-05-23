import {useFormikContext} from 'formik';
import React, {ChangeEvent, ChangeEventHandler, useEffect, useState} from 'react';
import {FormGroup, Input, Label} from 'reactstrap';
import KCheckbox from 'src/app/shared/components/primitives/k-checkbox';
import KCard from 'src/app/shared/molecules/k-card';

interface KFormikMultiSelectProps {
    name: string;
    options: { id: number, name: string }[];
}

const KFormikMultiSelect: React.FunctionComponent<KFormikMultiSelectProps> = (
    {
        name,
        options
    }) => {
    const formik = useFormikContext();
    const fieldMeta = formik.getFieldMeta<number[]>(name);
    const helpers = formik.getFieldHelpers<number[]>(name);
    const [values, setValues] = useState(new Set<number>());
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        setValues(new Set<number>(fieldMeta.initialValue));
        setShouldRender(true);
    }, []);

    const handleCheckboxChange = (id: number) => {
        if (values.has(id)) {
            values.delete(id);
        } else {
            values.add(id);
        }
        helpers.setValue(Array.from(values));
    }

    return (
        <KCard hasShadow={false}
               maxHeight={30}
               mhUnit={'vh'}
               header={name}
               bodiless={true}
        >
            {shouldRender &&
            <ul className="ul-none">
                {options.map(option =>
                    <li key={option.id}>
                        <FormGroup check>
                            <KCheckbox label={option.name}
                                       onChange={() => handleCheckboxChange(option.id)}
                                       initialValue={values.has(option.id)}
                            />
                            {values.has(option.id)}
                        </FormGroup>
                    </li>
                )}
            </ul>
            }
        </KCard>
    )
}


export default KFormikMultiSelect;
