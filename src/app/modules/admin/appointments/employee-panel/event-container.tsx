import moment from 'moment';
import React from 'react';
import {Appointment, CustomerAppointment} from 'src/app/api/appointments';
import {Employee} from 'src/app/api/employees';
import styles from 'src/app/modules/admin/appointments/employee-panel/employee-panel.module.scss';
import {useHoursConverter} from 'src/app/modules/admin/appointments/employee-panel/hooks';
import {useAppSelector} from 'src/app/store';
import {appointmentSelectors} from 'src/app/store/admin/appointments';

interface EventProps {
    appointment: Appointment;
    onClick: () => void;
}


const Event: React.FunctionComponent<EventProps> = (
    {
        appointment,
        onClick
    }) => {
    const start = moment.utc(appointment.start);
    const end = moment.utc(appointment.end);

    const customerAppointment = 'customer' in appointment && appointment.customer ? appointment as CustomerAppointment : null;


    const duration = moment.duration(end.diff(start));

    const backgroundColor = customerAppointment ? customerAppointment.service.color : '#FFFFFF';
    const title = customerAppointment ? customerAppointment.customer.name : appointment.internalNotes;
    const subTitle = customerAppointment ? customerAppointment.service.name : '';

    const style: React.CSSProperties = {
        top: useHoursConverter(start),
        height: useHoursConverter(duration),
        backgroundColor,
    }

    return (
        <div style={style}
             className={styles.panelEvent}
             onClick={onClick}
        >
            <div>
                {title}
            </div>
            {subTitle}
        </div>
    )
}

interface EventsContainerProps {
    employee: Employee;
    onSelect: (entity: Appointment | null) => () => void
}

const EventsContainer: React.FunctionComponent<EventsContainerProps> = (
    {
        employee,
        onSelect
    }) => {
    const appointments = useAppSelector(appointmentSelectors.selectAll);

    const employeeAppointments = React.useMemo(() =>
            appointments.filter(appointment => appointment.employee.id === employee.id)
        , [appointments, employee.id]
    )

    return (
        <div className="position-relative">
            {employeeAppointments.map(appointment =>
                <Event key={appointment.id}
                       appointment={appointment}
                       onClick={onSelect(appointment)}
                />
            )}
        </div>
    )
}


export default EventsContainer;
