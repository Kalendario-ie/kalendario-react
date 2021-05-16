import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AUTH_ROUTES} from 'src/app/modules/auth/urls';
import {USER_ROUTES} from 'src/app/modules/users/urls';
import UsersRoutes from 'src/app/modules/users/users-routes';
import AuthContainer from './modules/auth/auth-container';
import HomeContainer from './modules/core/home/home-container';
import CompaniesRoutes from './modules/companies/companies-routes';
import { ProtectedRoute } from './shared/util/router-extensions';


const AppRoutes: React.FunctionComponent = () => {
    return (
        <Switch>
            <Route path={AUTH_ROUTES.ROOT} component={AuthContainer}/>
            <Route path="/c" component={CompaniesRoutes}/>
            <ProtectedRoute path={USER_ROUTES.ROOT} component={UsersRoutes}/>
            <Route path="/" component={HomeContainer}/>
        </Switch>
    )
}

export default AppRoutes;
