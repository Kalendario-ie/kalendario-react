import React from 'react';
import KInput from 'src/app/shared/molecules/tables/k-Input';

interface KDefaultColumnFilterProps {
    column: {
        filterValue: string;
        setFilter: (value: string | undefined) => void;
        Header: string
        id: any;
    }
}

export const KDefaultColumnFilter: React.FunctionComponent<KDefaultColumnFilterProps> = ({
                                 column: {filterValue, Header, setFilter},
                             }) => {
    return (
        <KInput
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
            }}
            placeholder={`Search ${Header}`}
        />
    )
}
