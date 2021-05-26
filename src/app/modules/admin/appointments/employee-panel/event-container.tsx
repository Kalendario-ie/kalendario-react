import moment from 'moment';
import React from 'react';
import {Appointment} from 'src/app/api/appointments';
import {Employee} from 'src/app/api/employees';
import styles from 'src/app/modules/admin/appointments/employee-panel/employee-panel.module.scss';
import {useAppSelector} from 'src/app/store';
import {appointmentSelectors} from 'src/app/store/admin/appointments';
import {adminDashboardSelectors} from 'src/app/store/admin/dashboard';

interface EmployeePanelEventsProps {
    employee: Employee;
}


interface EventContainerProps {
    appointment: Appointment;
}


const Event: React.FunctionComponent<EventContainerProps> = (
    {
        appointment
    }) => {
    const slotSize = useAppSelector(adminDashboardSelectors.selectSlotSize);
    const start = moment.utc(appointment.start);
    const end = moment.utc(appointment.end);

    const top = `${(start.hours() + (start.minutes() / 60)) * slotSize}rem`;
    const duration = moment.duration(end.diff(start));
    const height = `${(duration.hours() + duration.minutes() / 60) * slotSize}rem`;
    const backgroundColor = appointment.service.color;

    const style: React.CSSProperties = {
        top,
        height,
        backgroundColor,
    }

    return (
        <div style={style}
             className={styles.panelEvent}>
            <div>
                {appointment.customer.name}
            </div>
            {appointment.service.name}
        </div>
    )
}


const EventsContainer: React.FunctionComponent<EmployeePanelEventsProps> = (
    {
        employee
    }) => {
    const appointments = useAppSelector(appointmentSelectors.selectAll);

    const employeeAppointments = React.useMemo(() =>
            appointments.filter(appointment => appointment.employee.id === employee.id)
        , [appointments]
    )

    return (
        <div className="position-relative">
            {employeeAppointments.map(appointment =>
                <Event key={appointment.id} appointment={appointment}/>
            )}
        </div>
    )
}


export default EventsContainer;
