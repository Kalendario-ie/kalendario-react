import moment from 'moment';
import React from 'react';
import {Appointment} from 'src/app/api/appointments';
import AvatarImg from 'src/app/shared/molecules/avatar-img';
import KFlexColumn from 'src/app/shared/molecules/flex/k-flex-column';
import KFlexRow from 'src/app/shared/molecules/flex/k-flex-row';
import KIcon from 'src/app/shared/molecules/KIcon';

interface EventDetailsProps {
    appointment: Appointment;
}

const EventDetails: React.FunctionComponent<EventDetailsProps> = (
    {
        appointment
    }) => {
    return (
        <KFlexRow className="flex-fill" align={'center'}>
            <AvatarImg size={4} src={appointment.employee.photoUrl}/>
            <KFlexColumn className="pl-2 flex-fill">
                <KFlexRow justify={'between'}>
                        <span>
                        <KIcon icon="calendar"/>
                            {moment.utc(appointment.start).format('DD - MMMM')}
                        </span>
                    <span>
                        <KIcon icon="clock-o"/>
                        {moment.utc(appointment.start).format('HH:mm - ')}
                        {moment.utc(appointment.end).format('HH:mm')}
                        </span>
                </KFlexRow>
                <div>
                    {appointment.employee.name}
                </div>
                <KFlexRow>
                    {appointment.service.name}
                    <span className="flex-fill c-primary text-right">
                        {appointment.service.price}
                        </span>
                </KFlexRow>
            </KFlexColumn>
        </KFlexRow>

    )
}


export default EventDetails;
