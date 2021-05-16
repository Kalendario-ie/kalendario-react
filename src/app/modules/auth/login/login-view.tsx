import KForm from 'src/app/shared/components/forms/k-form';
import SubmitButton from 'src/app/shared/components/forms/buttons/submit-button';
import KInput from 'src/app/shared/components/forms/input/k-formik-input';
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
    )
}

export default LoginView;
