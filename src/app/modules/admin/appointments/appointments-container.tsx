import React from 'react';
import EmployeePanelHeadersContainer
    from 'src/app/modules/admin/appointments/employee-panel/employee-panel-headers-container';
import EmployeePanelsBodyContainer
    from 'src/app/modules/admin/appointments/employee-panel/employee-panels-body-container';
import {useReloadAppointmentsEffect} from 'src/app/modules/admin/appointments/employee-panel/hooks';
import SchedulingDateSelector from 'src/app/modules/admin/appointments/scheduling-date-selector';
import SchedulingPanelsSelector from 'src/app/modules/admin/appointments/scheduling-panels/scheduling-panels-selector';
import {useInitializeEffect} from 'src/app/shared/admin/hooks';
import {KFlexColumn} from 'src/app/shared/components/flex';
import {employeeActions} from 'src/app/store/admin/employees';


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
