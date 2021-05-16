import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Appointment} from 'src/app/api/appointments';
import {RequestModelGetParams} from 'src/app/api/companies';
import EventModal from 'src/app/modules/users/bookings/event-modal';
import KalendarioCard from 'src/app/shared/molecules/kalendario-card';
import KalendarioContainer from 'src/app/shared/molecules/kalendario-container';
import moment from 'moment'
import {Calendar, momentLocalizer, stringOrDate} from 'react-big-calendar'
import {eventsRequest, selectEvents, selectSelectedEvent, setSelectedEvent} from 'src/app/store/users';


const BookingsContainer: React.FunctionComponent = () => {
    const events = useSelector(selectEvents)
        ?.map(a => ({...a, title: a.companyName}));
    const selectedEvent = useSelector(selectSelectedEvent);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(eventsRequest({start: moment.utc().startOf('month'), end: moment.utc().endOf('month')}))
    }, []);


    const updateEvents = (range: Date[] | { start: stringOrDate; end: stringOrDate }) => {
        const request: RequestModelGetParams = Array.isArray(range)
            ? {start: moment.utc(range[0]), end: moment.utc(range[range.length - 1])}
            : {start: moment.utc(range.start), end: moment.utc(range.end)}
        dispatch(eventsRequest(request));
    }

    const selectEvent = (appointment: Appointment) => dispatch(setSelectedEvent(appointment))
    const closeModal = () => dispatch(setSelectedEvent(null));

    return (
        <KalendarioContainer>
            <KalendarioCard>
                <Calendar
                    localizer={momentLocalizer(moment)}
                    events={events || []}
                    startAccessor="start"
                    endAccessor="end"
                    style={{height: 500}}
                    onRangeChange={updateEvents}
                    onSelectEvent={selectEvent}
                />
            </KalendarioCard>
            <EventModal appointment={selectedEvent}
                        closeClick={closeModal}/>
        </KalendarioContainer>
    )
}


export default BookingsContainer;
