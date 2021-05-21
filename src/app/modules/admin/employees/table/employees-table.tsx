import React, {useMemo} from 'react';
import {Employee} from 'src/app/api/employees';
import EmployeeRowExpanded from 'src/app/modules/admin/employees/table/employee-row-expanded';
import AvatarImg from 'src/app/shared/components/primitives/avatar-img';
import KIcon from 'src/app/shared/components/primitives/k-icon';
import KTable from 'src/app/shared/molecules/tables/k-table';
import KTextColumnFilter from 'src/app/shared/molecules/tables/k-text-column-filter';

interface EmployeesTableProps {
    employees: Employee[];
}

const EmployeesTable: React.FunctionComponent<EmployeesTableProps> = (
    {
        employees
    }) => {
    const columns = useMemo(() => [
        {
            // Make an expander cell
            Header: () => null, // No header
            id: 'expander', // It needs an ID
            Cell: (value: any) => (
                <span>
                    {value.row.isExpanded ? <KIcon icon="caret-down"/> : <KIcon icon="caret-right"/>}
                </span>
            ),
        },
        {
            Header: 'Photo',
            accessor: 'photoUrl',
            Cell: (value: any) => <AvatarImg src={value.cell.value} size={3}/>
        },
        {
            Header: 'Name',
            accessor: 'name',
            Filter: KTextColumnFilter
        },
        {
            Header: 'Email',
            accessor: 'email',
            Filter: KTextColumnFilter
        },
        {
            Header: 'Phone',
            accessor: 'phone',
            Filter: KTextColumnFilter
        },
        {
            Header: 'Instagram',
            accessor: 'instagram',
        }
    ], [])

    const renderRowSubComponent = React.useCallback(
        (row: any) => <EmployeeRowExpanded employee={row.original}/>, [])

    return (
        <KTable columns={columns}
                data={employees}
                renderRowSubComponent={renderRowSubComponent}
                hover={true}
        />
    )
}


export default EmployeesTable;
