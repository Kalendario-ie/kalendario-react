import AppointmentHistoryContainer from 'src/app/modules/admin/appointments/appointment-history-container';
import {KFlexRow} from 'src/app/shared/components/flex';
import {KIconButton} from 'src/app/shared/components/primitives/buttons';
import React, {useState} from 'react';
import {
    Appointment,
    CustomerAppointment,
    EventType,
    upsertCustomerAppointmentRequestParser,
    UpsertCustomerAppointmentRequestValidation,
    upsertEmployeeEventRequestParser,
    UpsertEmployeeEventRequestValidation
} from 'src/app/api/appointments';
import {useInitializeEffect} from 'src/app/shared/admin/hooks';
import {AdminEditContainerProps} from 'src/app/shared/admin/interfaces';
import {KFormikForm, KFormikInput} from 'src/app/shared/components/forms';
import KFormikDatetimeInput from 'src/app/shared/components/forms/k-formik-datetime-input';
import {serviceActions} from 'src/app/store/admin/services';
import CustomerAppointmentUpsertForm from './customer-appointment-upsert-form';

const AppointmentUpsertForm: React.FunctionComponent<AdminEditContainerProps<Appointment>> = (
    {
        entity,
        apiError,
        onSubmit,
        onCancel
    }) => {
    const isAppointment = entity?.type === EventType.CustomerAppointment;
    const validationSchema = isAppointment ? UpsertCustomerAppointmentRequestValidation : UpsertEmployeeEventRequestValidation;
    const initialValues = isAppointment ? upsertCustomerAppointmentRequestParser(entity) : upsertEmployeeEventRequestParser(entity);
    const [showHistory, setShowHistory] = useState(false);
    useInitializeEffect(serviceActions);

    const handleHistoryClick = () => {
        setShowHistory(true);
    };

    const handleHistoryCloseClick = () => {
        setShowHistory(false);
    };

    return (
        <KFormikForm initialValues={initialValues}
                     apiError={apiError}
                     onSubmit={onSubmit}
                     onCancel={onCancel}
                     validationSchema={validationSchema}
        >
            {entity &&
            <KFlexRow justify="end">
                <KIconButton icon="history"
                             color="primary"
                             onClick={handleHistoryClick}/>
                <AppointmentHistoryContainer id={entity.id} isOpen={showHistory} onClose={handleHistoryCloseClick}/>
            </KFlexRow>
            }
            {isAppointment &&
            <CustomerAppointmentUpsertForm appointment={entity as CustomerAppointment}/>
            }
            {!isAppointment &&
            <>
                <KFormikDatetimeInput name="start"/>
                <KFormikDatetimeInput name="end"/>
                <KFormikInput name="internalNotes" as={'textarea'}/>
                <KFormikInput placeholder="Allow Overlapping" name="ignoreAvailability" as={'checkbox'}/>
            </>
            }
        </KFormikForm>
    )
}


export default AppointmentUpsertForm;
