import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRouteMatch} from 'react-router-dom';
import {CreateAppointmentRequest, Slot} from 'src/app/api/companies';
import SlotsView from 'src/app/modules/companies/slots/slots-view';
import {useKHistory} from 'src/app/shared/util/router-extensions';
import {selectLoggedIn} from 'src/app/store/auth';
import {
    bookSlotRequest,
    selectCompany,
    selectSelectedSlotId,
    selectSlots,
    selectSelectedServiceId,
    setSelectedSlotId
} from 'src/app/store/companies';

interface SlotsContainerProps {
}

const SlotsContainer: React.FunctionComponent<SlotsContainerProps> = () => {
    const company = useSelector(selectCompany);
    const serviceId = useSelector(selectSelectedServiceId);
    const slots = useSelector(selectSlots);
    const selectedSlotId = useSelector(selectSelectedSlotId);
    const isLoggedIn = useSelector(selectLoggedIn);

    const dispatch = useDispatch();

    let {url} = useRouteMatch();
    const history = useKHistory();

    const isEmpty = !slots || Object.keys(slots).length === 0;

    const selectSlotOrAddToCart = (slot: Slot) => {
        if (!serviceId) {
            return;
        }
        if (slot.id !== selectedSlotId) {
            dispatch(setSelectedSlotId(slot.id))
            return;
        }
        const start = slot.start.toISOString();
        const request: CreateAppointmentRequest = {start: start, service: +serviceId};
        if (isLoggedIn) {
            dispatch(bookSlotRequest(request));
            history.push(`${url}/cart`);
            return;
        }
        history.push('/auth/login', {returnUrl: `/c/${company?.name}/book`, ...request});
    }

    return (
        <SlotsView isEmpty={isEmpty}
                   slots={slots}
                   selectedSlotId={selectedSlotId}
                   onClick={selectSlotOrAddToCart}/>
    )
}


export default SlotsContainer;
