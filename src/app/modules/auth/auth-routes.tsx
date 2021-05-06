import {Route, Switch} from 'react-router-dom';
import React from 'react';
import Login from './login';
import Register from './register';


const AuthRoutes = () => <Switch>
    <Route path="/auth/login">
        <Login/>
    </Route>
    <Route path="/auth/register">
        <Register/>
    </Route>
</Switch>


export default AuthRoutes;
