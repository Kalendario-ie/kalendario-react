import React from 'react';
import {Appointment, blankCustomerAppointment, blankEmployeeEvent} from 'src/app/api/appointments';
import {Employee} from 'src/app/api/employees';
import {KIconButton} from 'src/app/shared/components/primitives/buttons';

interface CreateAppointmentButtonsProps {
    employee: Employee;
    onCreateClick: (entity: Appointment | null) => () => void;
    hour: number;
    minute: number;
}

const CreateAppointmentButtons: React.FunctionComponent<CreateAppointmentButtonsProps> = (
    {
        employee,
        onCreateClick,
        hour,
        minute
    }) => {
    const employeeId = employee.id;

    return (
        <>
            <KIconButton color="primary" icon={'plus'} onClick={onCreateClick(blankCustomerAppointment(employeeId, hour, minute))}/>
            <KIconButton color="accent" icon={'lock'} onClick={onCreateClick(blankEmployeeEvent(employeeId, hour, minute))}/>
        </>
    )
}


export default CreateAppointmentButtons;
