import React, {useEffect} from 'react';
import {Route, Switch, useParams, useRouteMatch} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import CartContainer from 'src/app/modules/companies/cart/cart-container';
import CompaniesMain from 'src/app/modules/companies/companies-main';
import {
    companyDetailsRequest,
} from '../../store/companies';

interface CompaniesContainerProps {
}

const CompaniesContainer: React.FunctionComponent<CompaniesContainerProps> = () => {
    let { path, url } = useRouteMatch();
    const {name} = useParams<{ name: string }>();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(companyDetailsRequest(name))
    }, [dispatch, name])

    return (
        <Switch>
            <Route path={`${path}/cart`}>
                <CartContainer/>
            </Route>
            <Route path={`${path}/`}>
                <CompaniesMain/>
            </Route>
        </Switch>
    )
}

export default CompaniesContainer;
