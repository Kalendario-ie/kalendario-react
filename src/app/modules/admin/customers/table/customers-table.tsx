import React, {useMemo} from 'react';
import {AdminTableContainerProps} from 'src/app/shared/admin/interfaces';
import KTable from 'src/app/shared/molecules/tables/k-table';
import KTextColumnFilter from 'src/app/shared/molecules/tables/k-text-column-filter';

const CustomersTable: React.FunctionComponent<AdminTableContainerProps> = (
    {
        entities,
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
        <KTable columns={columns} data={entities}/>
    )
}


export default CustomersTable;
