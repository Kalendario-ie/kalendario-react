import React from 'react';
import {FormattedMessage} from 'react-intl';
import {LoginRequest} from 'src/app/api/auth/requests';
import {ApiValidationError} from 'src/app/api/common/api-errors';
import {KFormikForm, KFormikInput, KFormikSubmit} from 'src/app/shared/components/forms';

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
        <KFormikForm initialValues={data}
                     apiError={apiError}
                     onSubmit={onSubmit}
                     validationSchema={validationSchema}>
            <>
                <KFormikInput name="email" type="email"/>
                <KFormikInput name="password" type="password"/>
                <KFormikSubmit text={<FormattedMessage id={"AUTH.LOGIN"}/>}
                               isBlock={true}
                />
            </>
        </KFormikForm>
    )
}

export default LoginView;
