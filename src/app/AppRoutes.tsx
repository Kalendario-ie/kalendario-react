import {Route, Switch} from 'react-router-dom';
import AuthContainer from './modules/auth/auth-container';
import React from 'react';
import HomeContainer from './modules/home/home-container';

interface AppRouteProps {
}

const AppRoutes: React.FC<AppRouteProps> = () => {
    return (
        <Switch>
            <Route path="/auth">
                <AuthContainer/>
            </Route>
            <Route path="/">
                <HomeContainer/>
            </Route>
        </Switch>
    )
}

export default AppRoutes;
