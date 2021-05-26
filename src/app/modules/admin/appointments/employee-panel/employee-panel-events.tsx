import React from 'react';
import {Employee} from 'src/app/api/employees';

interface EmployeePanelEventsProps {
    employee: Employee;
}

const EmployeePanelEvents: React.FunctionComponent<EmployeePanelEventsProps> = (
    {
        employee
    }) => {
    return (
        <div></div>
    )
}


export default EmployeePanelEvents;
