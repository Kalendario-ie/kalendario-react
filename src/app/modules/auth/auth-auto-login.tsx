import {authApi} from "src/app/api/auth/clients";
import {useDispatch} from 'react-redux';
import {setUser} from 'src/app/store/auth';
import React, {useEffect} from 'react';

interface AuthAutoLoginProps {
    children: React.ReactNode;
}

const AuthAutoLogin: React.FunctionComponent<AuthAutoLoginProps> = (
    {children}
) => {
    const dispatch = useDispatch();
    useEffect(() => {
        authApi.whoAmI().then(user => {
            dispatch(setUser(user));
        });
    }, [dispatch]);

    return (
        <>
            {children}
        </>
    )
}

export default AuthAutoLogin;
