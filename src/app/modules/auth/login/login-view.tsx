import KalendarioCard from '../../../shared/molecules/kalendario-card';
import {FormattedMessage} from 'react-intl';
import KForm from '../../../shared/components/forms/k-form';
import React from 'react';
import SubmitButton from '../../../shared/components/forms/buttons/submit-button';
import {LoginRequest} from '../../../shared/api/auth/requests';
import KInput from '../../../shared/components/forms/input/k-input';
import KalendarioContainer from '../../../shared/molecules/kalendario-container';
import {ApiValidationError} from '../../../shared/api/common/api-errors';

export interface LoginViewProps {
    data: LoginRequest;
    onSubmit: (data: LoginRequest) => void;
    apiError: ApiValidationError | null;
    validationSchema?: any | (() => any);
}

const LoginView: React.FunctionComponent<LoginViewProps> = (
    {
        data,
        onSubmit,
        apiError,
        validationSchema
    }) => {

    return (
        <KalendarioContainer>
            <KalendarioCard maxWidth={400}
                            header={<FormattedMessage id="AUTH.LOGIN-HEADER"/>}
            >
                <KForm initialValues={data}
                       apiError={apiError}
                       onSubmit={onSubmit}
                       validationSchema={validationSchema}>
                    <>
                        <KInput name="email" type="email"/>
                        <KInput name="password" type="password"/>
                        <SubmitButton text={<FormattedMessage id={"AUTH.LOGIN"}/>}
                                      isBlock={true}
                        ><FormattedMessage id="COMMON.FORM.SUBMIT"/></SubmitButton>
                    </>
                </KForm>
            </KalendarioCard>
        </KalendarioContainer>
    )
}

export default LoginView;
