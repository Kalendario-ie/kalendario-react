import LoginView from './login-view';
import {LoginRequest} from '../../../shared/api/auth/requests';
import {useDispatch, useSelector} from 'react-redux'
import {loginRequest, selectApiError} from '../../../store/auth';
import {LoginRequestValidation} from '../../../shared/api/auth/validations';




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
