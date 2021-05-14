import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import CompaniesContainer from './companies-container';


const CompaniesRoutes: React.FunctionComponent = () => {
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}/:name`}>
                <CompaniesContainer/>
            </Route>
        </Switch>
    )
}

export default CompaniesRoutes;
