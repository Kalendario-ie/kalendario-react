import LoginView from './login-view';
import {useDispatch, useSelector} from 'react-redux'
import {loginRequest, selectApiError} from 'src/app/store/auth';
import {LoginRequest} from 'src/app/api/auth/requests';
import {LoginRequestValidation} from 'src/app/api/auth/validations';


const LoginContainer = () => {
    const dispatch = useDispatch()
    const apiError = useSelector(selectApiError)

    const initialValues: LoginRequest = {email: '', password: ''};
    const handleSubmit = (data: LoginRequest) => {
        dispatch(loginRequest(data));
    };
    return (
        <LoginView onSubmit={handleSubmit}
                   data={initialValues}
                   apiError={apiError}
                   validationSchema={LoginRequestValidation}
        />
    )
}

export default LoginContainer;
