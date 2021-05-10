import React from 'react';
import {Route, Switch} from 'react-router-dom';
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
            <Route path="/">
                <HomeContainer/>
            </Route>
        </Switch>
    )
}

export default AppRoutes;
