import React, {useMemo} from 'react';
import {Customer} from 'src/app/api/customers';
import KTable from 'src/app/shared/molecules/tables/k-table';
import KTextColumnFilter from 'src/app/shared/molecules/tables/k-text-column-filter';

interface CustomersTableProps {
    customers: Customer[];
    filter: (value: string | undefined) => void;
}

const CustomersTable: React.FunctionComponent<CustomersTableProps> = (
    {
        customers,
        filter
    }) => {
    const columns =
        useMemo(() => [
            {
                Header: 'Name',
                accessor: 'name',
                Filter: (cell: any) => <KTextColumnFilter {...cell} onChangeSideEffect={filter}/>
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'Phone',
                accessor: 'phone',
            }
        ], [])

    return (
        <KTable columns={columns} data={customers}/>
    )
}


export default CustomersTable;
