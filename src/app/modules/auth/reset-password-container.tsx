import React, {useState} from 'react';
import {FormattedMessage} from 'react-intl';
import {authApi, ForgotPasswordRequest} from 'src/app/api/auth';
import {ForgotPasswordRequestValidation} from 'src/app/api/auth/validations';
import {ApiValidationError} from 'src/app/api/common/api-errors';
import {KFlexColumn} from 'src/app/shared/components/flex';
import {KFormikForm, KFormikInput, KFormikSubmit} from 'src/app/shared/components/forms';
import {KCard, KPageContainer} from 'src/app/shared/components/primitives/containers';

interface ResetPasswordContainerProps {
    children: React.ReactNode;
}

const ResetPasswordContainer: React.FunctionComponent<ResetPasswordContainerProps> = (
    {
        children
    }) => {
    const [apiError, setApiError] = useState<ApiValidationError | null>(null);
    const [emailSent, setEmailSent] = useState(false);
    const initialValue: ForgotPasswordRequest = {email: ''};

    const handleSubmit = (values: ForgotPasswordRequest) => {
        authApi.forgotPassword(values)
            .then(res => setEmailSent(true))
            .catch(error => setApiError(error));
    }

    return (
        <KPageContainer>
            <KFlexColumn align="center">
                <KCard maxWidth={400}
                       header={<FormattedMessage id="AUTH.RESET-PASS-HEADER"/>}
                >
                    {!emailSent &&
                    < KFormikForm initialValues={initialValue}
                                  apiError={apiError}
                                  onSubmit={handleSubmit}
                                  validationSchema={ForgotPasswordRequestValidation}
                    >
                        <KFormikInput type="email" name="email"/>
                        <KFormikSubmit text={<FormattedMessage id={"AUTH.RESET-PASS-CONFIRM"}/>}
                                       isBlock={true}
                        />
                    </KFormikForm>
                    }
                    {emailSent &&
                    <FormattedMessage id="AUTH.RESET-PASS-SENT"/>
                    }

                </KCard>
            </KFlexColumn>
        </KPageContainer>
    )
}


export default ResetPasswordContainer;
