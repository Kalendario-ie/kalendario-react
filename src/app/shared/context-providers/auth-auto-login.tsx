import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {authApi} from "src/app/api/auth/clients";
import {User} from 'src/app/api/users';
import {useAppSelector} from 'src/app/store';
import {selectUser, selectLoadingUser, setLoadingUser, setUser} from 'src/app/store/auth';

interface AuthAutoLoginProps {
    children: React.ReactNode;
}

const AuthAutoLogin: React.FunctionComponent<AuthAutoLoginProps> = (
    {children}
) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLoadingUser(true));
        authApi.whoAmI().then(user => {
            dispatch(setUser(user));
        });
    }, []);

    return (
        <>
            {children}
        </>
    )
}

export default AuthAutoLogin;


export function useCurrentUser(): [boolean, User | null] {
    const user = useAppSelector(selectUser);
    const loading = useAppSelector(selectLoadingUser);
    return [loading, user];
}
