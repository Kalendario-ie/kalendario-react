import React from 'react';
import {ReactFacebookFailureResponse, ReactFacebookLoginInfo} from 'react-facebook-login';
import {FormattedMessage} from 'react-intl';
import {useDispatch, useSelector} from 'react-redux'
import {LoginRequest} from 'src/app/api/auth/requests';
import {LoginRequestValidation} from 'src/app/api/auth/validations';
import {useRedirectIfLoggedInEffect} from 'src/app/modules/auth/effects';
import {KFlexColumn} from 'src/app/shared/components/flex';
import {KCard, KPageContainer} from 'src/app/shared/components/primitives/containers';
import {facebookLoginRequest, loginRequest, selectApiError} from 'src/app/store/auth';
import LoginView from './login-view';


const LoginContainer = () => {
    useRedirectIfLoggedInEffect();
    const dispatch = useDispatch();
    const apiError = useSelector(selectApiError);
    const initialValues: LoginRequest = {email: '', password: ''};
    const handleSubmit = (data: LoginRequest) => {
        dispatch(loginRequest(data));
    };

    const faceBookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;

    const facebookCallback = (userInfo: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
        if ('id' in userInfo) {
            dispatch(facebookLoginRequest(userInfo.accessToken));
        }
    }

    return (
        <KPageContainer>
            <KFlexColumn align="center">
                <KCard maxWidth={400}
                       header={<FormattedMessage id="AUTH.LOGIN-HEADER"/>}
                >
                    <>
                        {/*{faceBookAppId &&*/}
                        {/*<FacebookLogin*/}
                        {/*    appId={faceBookAppId}*/}
                        {/*    autoLoad={false}*/}
                        {/*    size={'small'}*/}
                        {/*    fields="name,email,picture"*/}
                        {/*    callback={facebookCallback}/>*/}
                        {/*}*/}

                        <LoginView onSubmit={handleSubmit}
                                   data={initialValues}
                                   apiError={apiError}
                                   validationSchema={LoginRequestValidation}
                        />
                    </>
                </KCard>
            </KFlexColumn>
        </KPageContainer>
    )
}

export default LoginContainer;
