import React, {useEffect} from 'react';
import {FormattedMessage} from 'react-intl';
import {useDispatch} from 'react-redux';
import {authApi} from 'src/app/api/auth/clients';
import KFlexRow from 'src/app/shared/molecules/flex/k-flex-row';
import KalendarioCard from 'src/app/shared/molecules/kalendario-card';
import KalendarioContainer from 'src/app/shared/molecules/kalendario-container';
import {setUser} from 'src/app/store/auth';


const LogoutContainer: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        authApi.logout().then(() => {
            dispatch(setUser(null));
        });
    }, [dispatch]);

    return (
        <KalendarioContainer>
            <KFlexRow align={'center'} justify={'center'}>
                <KalendarioCard maxWidth={400}>
                    <FormattedMessage id={'AUTH.LOGOUT-SUCCESS'}/>
                </KalendarioCard>
            </KFlexRow>
        </KalendarioContainer>
    )
}


export default LogoutContainer;
