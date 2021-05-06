import KalendarioCard from '../../shared/molecules/kalendario-card';
import {FormattedMessage} from 'react-intl';
import {useSelector} from 'react-redux';
import {selectLoggedIn} from '../../store/auth/selectors';


const Login = () => {
    const test = useSelector(selectLoggedIn);
    return <KalendarioCard header={<FormattedMessage id="AUTH.LOGIN"/>}>
    <div>{test.toString()}</div>
    </KalendarioCard>
}

export default Login;
