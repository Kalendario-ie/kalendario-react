import React from 'react';
import {FormattedMessage} from 'react-intl';
import {AdminCompany} from 'src/app/api/admin-companies';
import {KFlexColumn, KFlexRow} from 'src/app/shared/components/flex';

interface SettingsProps {
    company: AdminCompany;
}

const Settings: React.FunctionComponent<SettingsProps> = ({company}) => {
    return (
        <KFlexRow justify={'around'} className={"m-4"}>
            <KFlexColumn className={'w-50 mx-2'}>
                <h5>
                    <FormattedMessage id="ADMIN.CONFIG.BOOKING-MESSAGES"/>
                </h5>
                <h6>Pre Book Warn</h6>
                <p>{company.config.preBookWarn}</p>
                <h6>Post Book Message</h6>
                <p>{company.config.postBookMessage}</p>
            </KFlexColumn>
            <KFlexColumn  className={'w-50 mx-2'}>
                <h5>
                    <FormattedMessage id="ADMIN.CONFIG.EMAIL-MESSAGES"/>
                </h5>
                <h6>Post Book Email Message</h6>
                <p>{company.config.postBookEmailMessage}</p>

                <h6>Appointment Reminder Message</h6>
                <p>{company.config.appointmentReminderMessage}</p>

                <h6>Appointment Accepted Message</h6>
                <p>{company.config.appointmentAcceptedMessage}</p>

                <h6>Appointment Rejected Message</h6>
                <p>{company.config.appointmentRejectedMessage}</p>
            </KFlexColumn>
        </KFlexRow>
    );
};

export default Settings;
