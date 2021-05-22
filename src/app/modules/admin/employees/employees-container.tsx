import React from 'react';
import { employeeParser } from 'src/app/api/employees';
import EditCustomer from 'src/app/modules/admin/customers/edit/edit-customer';
import EmployeesTable from 'src/app/modules/admin/employees/table/employees-table';
import AdminDashboard from 'src/app/shared/admin/admin-dashboard';
import AdminListEditContainer from 'src/app/shared/admin/admin-list-edit-container';
import {employeeSelectors, employeeActions} from 'src/app/store/admin/employees';


const EmployeesContainer: React.FunctionComponent = () => {
    return (
        <AdminDashboard>
            <AdminListEditContainer baseSelectors={employeeSelectors}
                                    baseActions={employeeActions}
                                    entityParser={employeeParser}
                                    EditContainer={EditCustomer}
                                    ListContainer={EmployeesTable}/>
        </AdminDashboard>
    )
}


export default EmployeesContainer;
