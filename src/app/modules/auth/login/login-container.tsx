import React from 'react';
import FacebookLogin, {ReactFacebookFailureResponse, ReactFacebookLoginInfo} from 'react-facebook-login';
import {FormattedMessage} from 'react-intl';
import KFlexColumn from 'src/app/shared/molecules/flex/k-flex-column';
import KalendarioCard from 'src/app/shared/molecules/kalendario-card';
import KalendarioContainer from 'src/app/shared/molecules/kalendario-container';
import {useKHistory, useQueryParams} from 'src/app/shared/util/router-extensions';
import LoginView from './login-view';
import {useDispatch, useSelector} from 'react-redux'
import {facebookLoginRequest, loginRequest, selectApiError, selectLoggedIn} from 'src/app/store/auth';
import {LoginRequest} from 'src/app/api/auth/requests';
import {LoginRequestValidation} from 'src/app/api/auth/validations';


const LoginContainer = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectLoggedIn);
    const apiError = useSelector(selectApiError);
    const initialValues: LoginRequest = {email: '', password: ''};
    const handleSubmit = (data: LoginRequest) => {
        dispatch(loginRequest(data));
    };

    const {returnUrl, ...params} = useQueryParams();
    const history = useKHistory();
    if (isLoggedIn) {
        const redirectUrl = returnUrl || '/';
        history.push(redirectUrl, params);
    }

    const faceBookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;

    const facebookCallback = (userInfo: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
        if ('id' in userInfo) {
            dispatch(facebookLoginRequest(userInfo.accessToken));
        }
    }

    return (
        <KalendarioContainer>
            <KFlexColumn align="center">
                <KalendarioCard maxWidth={400}
                                header={<FormattedMessage id="AUTH.LOGIN-HEADER"/>}
                >
                    <>
                        {faceBookAppId &&
                        <FacebookLogin
                            appId={faceBookAppId}
                            autoLoad={false}
                            size={'small'}
                            fields="name,email,picture"
                            callback={facebookCallback}/>
                        }

                        <LoginView onSubmit={handleSubmit}
                                   data={initialValues}
                                   apiError={apiError}
                                   validationSchema={LoginRequestValidation}
                        />
                    </>
                </KalendarioCard>
            </KFlexColumn>
        </KalendarioContainer>
    )
}

export default LoginContainer;
