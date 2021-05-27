import React from 'react';
import {
    Appointment, CustomerAppointment,
    EventType,
    upsertCustomerAppointmentRequestParser,
    UpsertCustomerAppointmentRequestValidation,
    upsertEmployeeEventRequestParser,
    UpsertEmployeeEventRequestValidation
} from 'src/app/api/appointments';
import {useInitializeEffect} from 'src/app/shared/admin/hooks';
import {AdminEditContainerProps} from 'src/app/shared/admin/interfaces';
import {KFlexColumn} from 'src/app/shared/components/flex';
import {KFormikForm, KFormikInput} from 'src/app/shared/components/forms';
import KFormikDatetimeInput from 'src/app/shared/components/forms/k-formik-datetime-input';
import KFormikStandardButtons from 'src/app/shared/components/forms/k-formik-standard-buttons';
import {KFormikState} from 'src/app/shared/components/forms/KFormikState';
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
    useInitializeEffect(serviceActions);

    return (
        <KFlexColumn>
            <KFormikForm initialValues={initialValues}
                         apiError={apiError}
                         onSubmit={onSubmit}
                         validationSchema={validationSchema}
            >
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
                <KFormikStandardButtons onCancel={onCancel}/>
            </KFormikForm>
        </KFlexColumn>
    )
}


export default AppointmentUpsertForm;
