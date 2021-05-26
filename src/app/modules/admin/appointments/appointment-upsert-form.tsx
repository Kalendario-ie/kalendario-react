import React from 'react';
import {Appointment, upsertAppointmentRequestParser} from 'src/app/api/appointments';
import {UpsertEmployeeRequestValidation} from 'src/app/api/employees';
import {useInitializeEffect} from 'src/app/shared/admin/hooks';
import {AdminEditContainerProps} from 'src/app/shared/admin/interfaces';
import {KFormikForm, KFormikInput} from 'src/app/shared/components/forms';
import KFormikStandardButtons from 'src/app/shared/components/forms/k-formik-standard-buttons';
import {useAppSelector} from 'src/app/store';
import {employeeActions, employeeSelectors} from 'src/app/store/admin/employees';
import {serviceActions, serviceSelectors} from 'src/app/store/admin/services';

const AppointmentUpsertForm: React.FunctionComponent<AdminEditContainerProps<Appointment>> = (
    {
        entity,
        apiError,
        onSubmit,
        onCancel
    }) => {
    const employees = useAppSelector(employeeSelectors.selectAll);
    const services = useAppSelector(serviceSelectors.selectAll);
    useInitializeEffect(serviceActions);

    return (
        <KFormikForm initialValues={upsertAppointmentRequestParser(entity)}
                     apiError={apiError}
                     onSubmit={onSubmit}
                     validationSchema={UpsertEmployeeRequestValidation}
        >
            <KFormikInput name="start" type="date-time"/>
            <KFormikInput name="end" type="date"/>
            <KFormikInput name="employee" as={'select'} options={employees}/>
            <KFormikInput name="service" as={'select'} options={services}/>
            <KFormikInput name="internalNotes" as={'textarea'}/>
            <KFormikStandardButtons onCancel={onCancel}/>
        </KFormikForm>
    )
}


export default AppointmentUpsertForm;
