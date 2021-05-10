import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CompaniesContainer from './companies-container';


const CompaniesRoutes: React.FunctionComponent = () => {
    return (
        <Switch>
            <Route path="/c/:name">
                <CompaniesContainer/>
            </Route>
        </Switch>
    )
}

export default CompaniesRoutes;
