import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Appointment} from 'src/app/api/appointments';
import CompanyAvatar from 'src/app/modules/companies/avatar/company-avatar';
import EventDetails from 'src/app/shared/components/appoitments/event-details';
import KModal from 'src/app/shared/components/modal/k-modal';

interface EventModalProps {
    appointment: Appointment | null;
    closeClick: () => void;
}

const EventModal: React.FunctionComponent<EventModalProps> = (
    {
        appointment,
        closeClick
    }) => {

    const header = appointment &&
        <>
            <CompanyAvatar company={appointment.owner}/>
            <EventDetails appointment={appointment}/>
            <div className="c-primary text-right"><FormattedMessage id={`APPOINTMENT.STATUS.${appointment.status}`}/></div>
        </>

    return (
        <>
            <KModal isOpen={!!appointment}
                    backdrop={true}
                    header={header}
                    body={
                        <p>
                            {appointment?.owner.config.postBookMessage}
                        </p>
                    }
                    onCancel={closeClick}
                    buttons={[{color: 'primary', text: 'close', onClick: closeClick}]}
            />
        </>
    )
}


export default EventModal;
