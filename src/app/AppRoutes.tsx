import {Route, Switch} from 'react-router-dom';
import AuthContainer from './modules/auth/auth-container';
import React from 'react';

interface AppRouteProps {
}

const AppRoutes: React.FC<AppRouteProps> = () => {
    return (
        <Switch>
            <Route path="/auth">
                <AuthContainer/>
            </Route>
            <Route path="/">
                Home
            </Route>
        </Switch>
    )
}

export default AppRoutes;
