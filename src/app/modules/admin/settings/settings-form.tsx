import React, {useState} from 'react';
import {FormattedMessage, useIntl} from 'react-intl';
import {AdminCompany} from 'src/app/api/admin-companies';
import {ApiValidationError} from 'src/app/api/common/api-errors';
import {KFlexColumn, KFlexRow} from 'src/app/shared/components/flex';
import {KFormikForm, KFormikInput} from 'src/app/shared/components/forms';

interface SettingsProps {
    company: AdminCompany;
    apiError: ApiValidationError | null;
    onSubmit: (values: any) => void;
    onCancel: () => void;
}

const SettingsForm: React.FunctionComponent<SettingsProps> = (
    {
        company,
        apiError,
        onSubmit,
        onCancel
    }) => {
    return (
        <KFormikForm initialValues={company.config} apiError={apiError} onSubmit={onSubmit} onCancel={onCancel}>
        <KFlexRow justify={'around'} className={"m-4"}>
                <KFlexColumn className={'w-50 mx-2'}>
                    <h5>
                        <FormattedMessage id="ADMIN.CONFIG.BOOKING-MESSAGES"/>
                    </h5>
                    <KFormikInput as="textarea" name="preBookWarn"/>
                    <KFormikInput as="textarea" name="postBookMessage"/>
                </KFlexColumn>
                <KFlexColumn  className={'w-50 mx-2'}>
                    <h5>
                        <FormattedMessage id="ADMIN.CONFIG.EMAIL-MESSAGES"/>
                    </h5>
                    <KFormikInput as="textarea" name="postBookEmailMessage"/>
                    <KFormikInput as="textarea" name="appointmentReminderMessage"/>
                    <KFormikInput as="textarea" name="appointmentAcceptedMessage"/>
                    <KFormikInput as="textarea" name="appointmentRejectedMessage"/>
                </KFlexColumn>
        </KFlexRow>
        </KFormikForm>
    )
}

export default SettingsForm;
