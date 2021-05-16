import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {USER_ROUTES} from 'src/app/modules/users/urls';
import UsersRoutes from 'src/app/modules/users/users-routes';
import AuthContainer from './modules/auth/auth-container';
import HomeContainer from './modules/core/home/home-container';
import CompaniesRoutes from './modules/companies/companies-routes';

interface AppRouteProps {
}

const AppRoutes: React.FC<AppRouteProps> = () => {
    return (
        <Switch>
            <Route path="/auth">
                <AuthContainer/>
            </Route>
            <Route path="/c">
                <CompaniesRoutes/>
            </Route>
            <Route path={USER_ROUTES.ROOT}>
                <UsersRoutes/>
            </Route>
            <Route path="/">
                <HomeContainer/>
            </Route>
        </Switch>
    )
}

export default AppRoutes;
