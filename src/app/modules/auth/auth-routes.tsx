import {Route, Switch} from 'react-router-dom';
import React from 'react';
import Register from './register';
import LoginContainer from './login/login-container';


const AuthRoutes = () => <Switch>
    <Route path="/auth/login">
        <LoginContainer/>
    </Route>
    <Route path="/auth/register">
        <Register/>
    </Route>
</Switch>


export default AuthRoutes;
