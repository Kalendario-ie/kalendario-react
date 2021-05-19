import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LogoutContainer from 'src/app/modules/auth/logout-container';
import {AUTH_ROUTES} from 'src/app/modules/auth/urls';
import LoginContainer from './login/login-container';
import Register from './register';


const AuthRoutes = () => <Switch>
    <Route path={AUTH_ROUTES.LOGIN}>
        <LoginContainer/>
    </Route>
    <Route path={AUTH_ROUTES.REGISTER}>
        <Register/>
    </Route>
    <Route path={AUTH_ROUTES.LOGOUT}>
        <LogoutContainer/>
    </Route>
</Switch>


export default AuthRoutes;
