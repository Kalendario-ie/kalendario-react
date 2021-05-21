import React, {useMemo} from 'react';
import {Customer} from 'src/app/api/customers';
import AdminTableButtons from 'src/app/shared/admin/admin-table-buttons';
import KTable from 'src/app/shared/molecules/tables/k-table';
import KTextColumnFilter from 'src/app/shared/molecules/tables/k-text-column-filter';

interface CustomersTableProps {
    customers: Customer[];
    filter: (value: string | undefined) => void;
    buttons: (customer: Customer) => React.ReactNode;
}

const CustomersTable: React.FunctionComponent<CustomersTableProps> = (
    {
        customers,
        filter,
        buttons
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
            },
            {
                Header: () => null,
                id: 'buttons',
                Cell: (value: any) => buttons(value.row.original)
            }
        ], [])

    return (
        <KTable columns={columns} data={customers}/>
    )
}


export default CustomersTable;
