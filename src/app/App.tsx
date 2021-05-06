import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthRoutes from './modules/auth/auth-routes';

function App() {
    return (
        <Switch>
            <Route path="/auth">
                <AuthRoutes/>
            </Route>
            <Route path="/">
                Home
            </Route>
        </Switch>
    );
}

export default App;
