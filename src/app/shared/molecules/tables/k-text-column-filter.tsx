import React from 'react';
import KInput from 'src/app/shared/components/primitives/k-Input';

interface KTextColumnFilterProps {
    column: {
        filterValue: string;
        setFilter: (value: string | undefined) => void;
        Header: string
    },
    onChangeSideEffect?: (value: string) => void;
}

const KTextColumnFilter: React.FunctionComponent<KTextColumnFilterProps> = (
    {
        column: {filterValue, Header, setFilter},
        onChangeSideEffect
    }) => {
    const onChange = (value: string) => {
        setFilter(value || undefined)
        if (onChangeSideEffect) onChangeSideEffect(value)
    }
    return (
        <KInput
            value={filterValue || ''}
            onChange={e => {
                onChange(e.target.value)
            }}
            placeholder={`Search ${Header}`}
        />
    )
}


export default KTextColumnFilter;
