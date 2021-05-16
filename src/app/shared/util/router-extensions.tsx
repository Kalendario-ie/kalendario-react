import React from 'react';
import {RouteComponentProps} from 'react-router';
import {Redirect, Route, useHistory, useLocation} from 'react-router-dom';
import {isLoggedIn} from 'src/app/api/common/session-storage';
import {AUTH_ROUTES} from 'src/app/modules/auth/urls';


export type QueryParams = Record<string, string | number>;

export function useQueryParams(): { [key: string]: string } {
    const params = new URLSearchParams(useLocation().search);
    const result: { [key: string]: string } = {};
    params.forEach(((value, key) => result[key] = value));
    return result;
}

export function useKHistory() {
    const history = useHistory();
    const push = (value: string, params?: QueryParams) => history.push(pathWithParams(value, params));
    return {...history, push}
}


interface ProtectedRouteProps {
    path: string;
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

export const ProtectedRoute: React.FunctionComponent<ProtectedRouteProps> = (
    {
        path,
        component
    }) => {
    const loggedIn = isLoggedIn();
    const {returnUrl, ...params} = useQueryParams();
    const {location: {pathname}} = useKHistory();
    return (
        <>
            {loggedIn &&
            <Route path={path} component={component}/>
            }
            {!loggedIn &&
            <Redirect to={pathWithParams(AUTH_ROUTES.LOGIN, {...params, returnUrl: pathname})}/>
            }
        </>
    )
}


export function pathWithParams(path: string, queryParams: QueryParams | null | undefined): string {
    return `${path}${queryParams ? createQueryString(queryParams) : ''}`;
}

function createQueryString(params?: QueryParams): string {
    if (!params) return '';
    const url = Object.keys(params)
        .reduce((prev, cur, i) => {
            return `${prev}${i === 0 ? '?' : '&'}${cur}=${params[cur]}`
        }, '');
    return encodeURI(url);
}
