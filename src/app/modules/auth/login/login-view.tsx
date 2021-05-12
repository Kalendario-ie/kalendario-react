import KFlexColumn from 'src/app/shared/molecules/flex/k-flex-column';
import KalendarioCard from 'src/app/shared/molecules/kalendario-card';
import KalendarioContainer from 'src/app/shared/molecules/kalendario-container';
import KForm from 'src/app/shared/components/forms/k-form';
import SubmitButton from 'src/app/shared/components/forms/buttons/submit-button';
import KInput from 'src/app/shared/components/forms/input/k-input';
import {FormattedMessage} from 'react-intl';
import React from 'react';
import {LoginRequest} from 'src/app/api/auth/requests';
import {ApiValidationError} from 'src/app/api/common/api-errors';

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
            <KFlexColumn align="center">
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
            </KFlexColumn>
        </KalendarioContainer>
    )
}

export default LoginView;
