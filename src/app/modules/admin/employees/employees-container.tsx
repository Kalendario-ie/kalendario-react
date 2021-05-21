import React, {useEffect} from 'react';
import EmployeesTable from 'src/app/modules/admin/employees/table/employees-table';
import AdminDashboard from 'src/app/shared/admin/admin-dashboard';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import {employeeSelectors, employeeActions} from 'src/app/store/admin/employees';


const EmployeesContainer: React.FunctionComponent = () => {
    const dispatch = useAppDispatch()
    const employees = useAppSelector(employeeSelectors.selectAll)
    useEffect(() => {
        dispatch(employeeActions.initializeStore())
    }, []);

    return (
        <AdminDashboard>
            <EmployeesTable employees={employees}/>
        </AdminDashboard>
    )
}


export default EmployeesContainer;
