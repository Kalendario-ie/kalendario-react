import React, {useMemo} from 'react';
import {Customer} from 'src/app/api/customers';
import KIcon from 'src/app/shared/molecules/KIcon';
import KTable from 'src/app/shared/molecules/tables/k-table';

interface CustomersTableProps {
    customers: Customer[];
}

const CustomersTable: React.FunctionComponent<CustomersTableProps> = (
    {
        customers
    }) => {
    const columns = useMemo(() => [
        // {
        //     // Make an expander cell
        //     Header: () => null, // No header
        //     id: 'expander', // It needs an ID
        //     Cell: (value: any) => (
        //         <span>
        //             {value.row.isExpanded ? <KIcon icon="caret-down"/> : <KIcon icon="caret-right"/>}
        //         </span>
        //     ),
        // },

        {
            Header: 'Name',
            accessor: 'name',
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
        <KTable columns={columns} data={customers} />
    )
}


export default CustomersTable;
