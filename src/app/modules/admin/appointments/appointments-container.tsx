import React from 'react';
import SchedulingPanelsContainer from 'src/app/modules/admin/appointments/scheduling-panels/scheduling-panels-selector';
import SchedulingDateSelector from 'src/app/modules/admin/appointments/scheduling-date-selector';
import {KFlexColumn} from 'src/app/shared/components/flex';

interface AppointmentsContainerProps {
    children: React.ReactNode;
}

const AppointmentsContainer: React.FunctionComponent<AppointmentsContainerProps> = (
    {
        children
    }) => {
    return (
        <KFlexColumn>
            <SchedulingPanelsContainer/>
            <SchedulingDateSelector/>
        </KFlexColumn>
    )
}


export default AppointmentsContainer;
