import React from 'react';
import {useIntl} from 'react-intl';
import {Route, Switch} from 'react-router-dom';
import AppointmentsContainer from 'src/app/modules/admin/appointments/appointments-container';
import CustomersContainer from 'src/app/modules/admin/customers/customers-container';
import EmployeesContainer from 'src/app/modules/admin/employees/employees-container';
import PermissionGroupsContainer from 'src/app/modules/admin/permissionGroups/permission-groups-container';
import SchedulesContainer from 'src/app/modules/admin/schedules/schedules-container';
import ServicesContainer from 'src/app/modules/admin/services/services-container';
import {ADMIN_ROUTES} from 'src/app/modules/admin/urls';
import UsersContainer from 'src/app/modules/admin/users/users-container';
import KDashboardContainer from 'src/app/shared/components/dashboard/k-dashboard-container';
import {SideBarLinks} from 'src/app/shared/components/dashboard/k-dashboard-sidebar';
import {ProtectedRoute} from 'src/app/shared/util/router-extensions';

const AdminRoutes: React.FunctionComponent = () => {
    const intl = useIntl();
    const links: SideBarLinks = ({
        'Main': [
            // [intl.formatMessage({id: 'ADMIN.COMMON.HOME'}), ADMIN_ROUTES.HOME, 'home'],
            [intl.formatMessage({id: 'ADMIN.COMMON.SERVICES'}), ADMIN_ROUTES.SERVICES, 'magic'],
            [intl.formatMessage({id: 'ADMIN.COMMON.SCHEDULES'}), ADMIN_ROUTES.SCHEDULES, 'calendar-alt'],
            [intl.formatMessage({id: 'ADMIN.COMMON.EMPLOYEES'}), ADMIN_ROUTES.EMPLOYEES, 'people-carry'],
            [intl.formatMessage({id: 'ADMIN.COMMON.CUSTOMERS'}), ADMIN_ROUTES.CUSTOMERS, 'address-card'],
            [intl.formatMessage({id: 'ADMIN.COMMON.APPOINTMENTS'}), ADMIN_ROUTES.APPOINTMENTS, 'address-book'],
        ],
        'Manage': [
            [intl.formatMessage({id: 'ADMIN.COMMON.USERS'}), ADMIN_ROUTES.USERS, 'users'],
            [intl.formatMessage({id: 'ADMIN.COMMON.PERMISSION-GROUPS'}), ADMIN_ROUTES.PERMISSION_GROUPS, 'users-slash'],
        ]
    });

    return (
        <>
            {links &&
            <KDashboardContainer links={links}>
                <Switch>
                    <Route path={ADMIN_ROUTES.SERVICES} component={ServicesContainer}/>
                    <Route path={ADMIN_ROUTES.EMPLOYEES} component={EmployeesContainer}/>
                    <Route path={ADMIN_ROUTES.CUSTOMERS} component={CustomersContainer}/>
                    <Route path={ADMIN_ROUTES.SCHEDULES} component={SchedulesContainer}/>
                    <Route path={ADMIN_ROUTES.USERS} component={UsersContainer}/>
                    <Route path={ADMIN_ROUTES.PERMISSION_GROUPS} component={PermissionGroupsContainer}/>
                    <Route path={ADMIN_ROUTES.APPOINTMENTS} component={AppointmentsContainer}/>
                    <ProtectedRoute path={ADMIN_ROUTES.ROOT} component={ServicesContainer}/>
                </Switch>
            </KDashboardContainer>
            }
        </>
    )
}


export default AdminRoutes;
