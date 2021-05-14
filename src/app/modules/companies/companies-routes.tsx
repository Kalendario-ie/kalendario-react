import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Route, Switch, useParams, useRouteMatch} from 'react-router-dom';
import BookContainer from 'src/app/modules/companies/cart/book-container';
import CartContainer from 'src/app/modules/companies/cart/cart-container';
import CompaniesContainer from 'src/app/modules/companies/companies-container';
import {companyDetailsRequest} from 'src/app/store/companies';

const CompaniesInnerRoutes: React.FunctionComponent = () => {
    let {path} = useRouteMatch();
    const {name} = useParams<{ name: string }>();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(companyDetailsRequest(name))
    }, [dispatch, name])

    return (
        <Switch>
            <Route path={`${path}/book`}>
                <BookContainer/>
            </Route>
            <Route path={`${path}/cart`}>
                <CartContainer/>
            </Route>
            <Route path={`${path}/`}>
                <CompaniesContainer/>
            </Route>
        </Switch>
    )
}

const CompaniesRoutes: React.FunctionComponent = () => {
    let {path} = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}/:name`}>
                <CompaniesInnerRoutes/>
            </Route>
        </Switch>
    )
}

export default CompaniesRoutes;
