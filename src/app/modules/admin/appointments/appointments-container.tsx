import React from 'react';
import AppointmentUpsertForm from 'src/app/modules/admin/appointments/appointment-upsert-form';
import SchedulingDateSelector from 'src/app/modules/admin/appointments/date-selector/scheduling-date-selector';
import SchedulingPanelsSelector from 'src/app/modules/admin/appointments/scheduling-panels/scheduling-panels-selector';
import {useEditModal, useInitializeEffect} from 'src/app/shared/admin/hooks';
import {KFlexColumn} from 'src/app/shared/components/flex';
import {appointmentActions, appointmentSelectors} from 'src/app/store/admin/appointments';
import {employeeActions} from 'src/app/store/admin/employees';
import {
    EmployeePanelHeadersContainer,
    EmployeePanelsBodyContainer,
    useReloadAppointmentsEffect
} from './employee-panel';


const AppointmentsContainer: React.FunctionComponent = () => {
    useInitializeEffect(employeeActions);
    useReloadAppointmentsEffect();
    const [openModal, formModal] = useEditModal(appointmentSelectors, appointmentActions, AppointmentUpsertForm);

    return (
        <KFlexColumn>
            {formModal}
            <KFlexColumn className="sticky-top bg-white-gray">
                <SchedulingPanelsSelector/>
                <SchedulingDateSelector/>
                <EmployeePanelHeadersContainer/>
            </KFlexColumn>
            <EmployeePanelsBodyContainer onSelect={openModal}/>
        </KFlexColumn>
    )
}


export default AppointmentsContainer;
