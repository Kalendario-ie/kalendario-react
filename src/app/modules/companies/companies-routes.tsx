import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Route, Switch, useParams, useRouteMatch} from 'react-router-dom';
import BookContainer from 'src/app/modules/companies/cart/book-container';
import CartContainer from 'src/app/modules/companies/cart/cart-container';
import CheckoutContainer from 'src/app/modules/companies/checkout/checkout-container';
import CompaniesContainer from 'src/app/modules/companies/companies-container';
import {companiesUrls} from 'src/app/modules/companies/paths';
import {ProtectedRoute} from 'src/app/shared/util/router-extensions';
import {companyDetailsRequest} from 'src/app/store/companies';

const CompaniesInnerRoutes: React.FunctionComponent = () => {
    let {path} = useRouteMatch();
    const {name} = useParams<{ name: string }>();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(companyDetailsRequest(name))
    }, [dispatch, name])
    console.log(path)
    return (
        <Switch>
            <ProtectedRoute path={`${path}/book`} component={BookContainer}/>
            <Route path={`${path}/cart`} component={CartContainer}/>
            <Route path={`${path}/checkout`} component={CheckoutContainer}/>
            <Route path={`${path}/`} component={CompaniesContainer}/>
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
