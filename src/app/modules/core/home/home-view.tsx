import React from 'react';
import KalendarioContainer from 'src/app/shared/molecules/kalendario-container';
import AsyncSelect from 'react-select/async';
import {Company} from 'src/app/api/companies';


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
        width: '400px',
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
