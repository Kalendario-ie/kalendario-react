import React from 'react';
import KalendarioContainer from '../../shared/molecules/kalendario-container';
import AsyncSelect from 'react-select/async';
import {Company} from '../../shared/api/companies';


interface HomeViewProps {
    values: (value: string) => Promise<Company[]>,
    onChange: (value: Company | null) => void;
}

const HomeView: React.FunctionComponent<HomeViewProps> = (
    {
        values,
        onChange
    }) => {

    const groupStyles = {
        width: '50%',
    };

    return (
        <KalendarioContainer>
            <div style={groupStyles} className="company-shadow-1">
                <AsyncSelect cacheOptions
                             defaultOptions
                             backspaceRemovesValue
                             getOptionValue={(option) => option.name}
                             getOptionLabel={(option) => option.name}
                             onChange={(value, bc) => onChange(value)}
                             loadOptions={values}/>
            </div>
        </KalendarioContainer>
    )
}

export default HomeView;
