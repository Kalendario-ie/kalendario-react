import LoginView from './login-view';
import {LoginRequest} from '../../../shared/api/auth/requests';

const LoginContainer = () => {
    const initialValues: LoginRequest = {email: '', password: ''};
    const handleSubmit = ({}) => {
        alert('submited');
    };
    return (
        <LoginView onSubmit={handleSubmit} data={initialValues}/>
    )
}

export default LoginContainer;
