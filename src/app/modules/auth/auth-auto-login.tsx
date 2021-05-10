import {whoAmI} from '../../api/auth/clients';
import {useDispatch} from 'react-redux';
import {setUser} from '../../store/auth';
import React, {useEffect} from 'react';

interface AuthAutoLogin {
    children: React.ReactNode;
}

const AuthAutoLogin: React.FunctionComponent<AuthAutoLogin> = (
    {children}
) => {
    const dispatch = useDispatch();
    useEffect(() => {
        whoAmI().then(user => {
            dispatch(setUser(user));
        })
    }, [dispatch]);

    return (
        <>
            {children}
        </>
    )
}

export default AuthAutoLogin;
