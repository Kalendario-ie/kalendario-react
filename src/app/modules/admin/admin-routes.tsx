import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CustomersContainer from 'src/app/modules/admin/customers/customers-container';
import EmployeesContainer from 'src/app/modules/admin/employees/employees-container';
import PermissionGroupsContainer from 'src/app/modules/admin/permissionGroups/permission-groups-container';
import SchedulesContainer from 'src/app/modules/admin/schedules/schedules-container';
import ServicesContainer from 'src/app/modules/admin/services/services-container';
import {ADMIN_ROUTES} from 'src/app/modules/admin/urls';
import UsersContainer from 'src/app/modules/admin/users/users-container';
import AdminDashboard from 'src/app/shared/admin/admin-dashboard';

const AdminRoutes: React.FunctionComponent = () => {
    return (
        <AdminDashboard>
            <Switch>
                <Route path={ADMIN_ROUTES.SERVICES} component={ServicesContainer}/>
                <Route path={ADMIN_ROUTES.EMPLOYEES} component={EmployeesContainer}/>
                <Route path={ADMIN_ROUTES.CUSTOMERS} component={CustomersContainer}/>
                <Route path={ADMIN_ROUTES.SCHEDULES} component={SchedulesContainer}/>
                <Route path={ADMIN_ROUTES.USERS} component={UsersContainer}/>
                <Route path={ADMIN_ROUTES.PERMISSION_GROUPS} component={PermissionGroupsContainer}/>
                <Route path={ADMIN_ROUTES.ROOT} component={ServicesContainer}/>
            </Switch>
        </AdminDashboard>
    )
}


export default AdminRoutes;
