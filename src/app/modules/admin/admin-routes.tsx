import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ServicesContainer from 'src/app/modules/admin/services/services-container';
import {ADMIN_ROUTES} from 'src/app/modules/admin/urls';

const AdminRoutes: React.FunctionComponent = (
    {
        children
    }) => {
    return (
        <Switch>
            <Route path={ADMIN_ROUTES.SERVICES} component={ServicesContainer}/>
            <Route path={ADMIN_ROUTES.ROOT} component={ServicesContainer}/>
        </Switch>
    )
}


export default AdminRoutes;
