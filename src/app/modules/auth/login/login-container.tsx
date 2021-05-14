import {useKHistory, useQueryParams} from 'src/app/shared/util/router-extensions';
import LoginView from './login-view';
import {useDispatch, useSelector} from 'react-redux'
import {loginRequest, selectApiError, selectLoggedIn} from 'src/app/store/auth';
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

    const queryParams = useQueryParams();
    const history = useKHistory();
    if (isLoggedIn) {
        const { returnUrl, ...params } = queryParams;
        const redirectUrl = returnUrl || '/';
        history.push(redirectUrl, params);
    }

    return (
        <LoginView onSubmit={handleSubmit}
                   data={initialValues}
                   apiError={apiError}
                   validationSchema={LoginRequestValidation}
        />
    )
}

export default LoginContainer;
