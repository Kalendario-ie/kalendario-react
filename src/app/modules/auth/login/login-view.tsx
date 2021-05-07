import KalendarioCard from '../../../shared/molecules/kalendario-card';
import {FormattedMessage} from 'react-intl';
import KForm from '../../../shared/components/forms/k-form';
import React from 'react';
import KEmailInput from '../../../shared/components/forms/input/k-email-input';
import KPasswordInput from '../../../shared/components/forms/input/k-password-input';
import SubmitButton from '../../../shared/components/forms/buttons/submit-button';
import {LoginRequest} from '../../../shared/api/auth/requests';

export interface LoginViewProps {
    data: LoginRequest;
    onSubmit: (data: LoginRequest) => void;
}

const LoginView: React.FunctionComponent<LoginViewProps> = (props) => {
    return (
        <KalendarioCard header={<FormattedMessage id="AUTH.LOGIN-HEADER"/>}>
            <KForm initialValues={props.data} onSubmit={props.onSubmit}>
                {formik => (
                    <>
                        <KEmailInput id="email" name="email" onChange={formik.handleChange}
                                     value={formik.values.email}/>
                        <KPasswordInput id="password" name="password" onChange={formik.handleChange}
                                        value={formik.values.password}/>
                        <SubmitButton>Submit</SubmitButton>
                        {JSON.stringify(formik.values)}
                    </>
                )}
            </KForm>
        </KalendarioCard>
    )
}

export default LoginView;
