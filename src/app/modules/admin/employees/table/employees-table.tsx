import React, {useMemo} from 'react';
import {Employee} from 'src/app/api/employees';
import AvatarImg from 'src/app/shared/components/primitives/avatar-img';
import KTable from 'src/app/shared/molecules/tables/k-table';
import KCard from 'src/app/shared/molecules/k-card';

interface EmployeesTableProps {
    employees: Employee[];
}

const EmployeesTable: React.FunctionComponent<EmployeesTableProps> = (
    {
        employees
    }) => {
    const columns = useMemo(() => [
        {
            Header: 'Photo',
            accessor: 'photoUrl',
            Cell: (value: any) => <AvatarImg src={value.cell.value} size={3}/>
        },
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
        },
        {
            Header: 'Instagram',
            accessor: 'instagram',
        }
    ],[])

    return (
        <KCard>
            <KTable columns={columns} data={employees}/>
        </KCard>
    )
}


export default EmployeesTable;
