import React from 'react';
import KInput from 'src/app/shared/molecules/tables/k-Input';

interface KSelectColumnFilterProps {
    column: {
        filterValue: string;
        setFilter: (value: string | undefined) => void;
        preFilteredRows: any[];
        id: any;
    }
}

export const KSelectColumnFilter: React.FunctionComponent<KSelectColumnFilterProps> = ({
                                column: {filterValue, setFilter, preFilteredRows, id},
                            }) => {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
        const options = new Set()
        preFilteredRows.forEach(row => {
            options.add(row.values[id])
        })
        // @ts-ignore
        return [...options.values()]
    }, [id, preFilteredRows])

    return (
        <KInput
            type="select"
            value={filterValue}
            onChange={e => setFilter(e?.target.value || undefined)}
        >
            <option value="">All</option>
            {options.map((option, i) => (
                <option key={i} value={option}>
                    {option}
                </option>
            ))}
        </KInput>
    )
}
