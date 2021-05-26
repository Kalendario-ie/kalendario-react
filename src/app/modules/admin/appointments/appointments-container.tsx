import React from 'react';
import SchedulingDateSelector from 'src/app/modules/admin/appointments/date-selector/scheduling-date-selector';
import SchedulingPanelsSelector from 'src/app/modules/admin/appointments/scheduling-panels/scheduling-panels-selector';
import {useInitializeEffect} from 'src/app/shared/admin/hooks';
import {KFlexColumn} from 'src/app/shared/components/flex';
import {employeeActions} from 'src/app/store/admin/employees';
import {
    EmployeePanelHeadersContainer,
    EmployeePanelsBodyContainer,
    useReloadAppointmentsEffect
} from './employee-panel';


const AppointmentsContainer: React.FunctionComponent = () => {
    useInitializeEffect(employeeActions);
    useReloadAppointmentsEffect();

    return (
        <KFlexColumn>
            <KFlexColumn className="sticky-top bg-white-gray">
                <SchedulingPanelsSelector/>
                <SchedulingDateSelector/>
                <EmployeePanelHeadersContainer/>
            </KFlexColumn>
            <EmployeePanelsBodyContainer/>
        </KFlexColumn>
    )
}


export default AppointmentsContainer;
