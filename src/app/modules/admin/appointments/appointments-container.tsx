import React from 'react';
import EmployeePanel from 'src/app/modules/admin/appointments/employee-panel/employee-panel';
import SchedulingPanelsSelector from 'src/app/modules/admin/appointments/scheduling-panels/scheduling-panels-selector';
import SchedulingDateSelector from 'src/app/modules/admin/appointments/scheduling-date-selector';
import {KFlexColumn, KFlexRow} from 'src/app/shared/components/flex';
import {useAppSelector} from 'src/app/store';
import {adminDashboardSelectors} from 'src/app/store/admin/dashboard';

interface AppointmentsContainerProps {
    children: React.ReactNode;
}

const AppointmentsContainer: React.FunctionComponent<AppointmentsContainerProps> = (
    {
        children
    }) => {
    const selectedPanel = useAppSelector(adminDashboardSelectors.selectSelectedPanel)

    return (
        <KFlexColumn>
            <SchedulingPanelsSelector/>
            <SchedulingDateSelector/>
            {selectedPanel &&
            <KFlexRow>
                {selectedPanel.employees.map(id =>
                    <EmployeePanel key={id} employeeId={id}/> )
                }
            </KFlexRow>
            }
        </KFlexColumn>
    )
}


export default AppointmentsContainer;
