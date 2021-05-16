import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CreateAppointmentRequest, Slot} from 'src/app/api/companies';
import BookContainer from 'src/app/modules/companies/cart/book-container';
import {companiesUrls} from 'src/app/modules/companies/paths';
import SlotsView from 'src/app/modules/companies/slots/slots-view';
import { ProtectedRoute } from 'src/app/shared/util/router-extensions';
import {
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
    const dispatch = useDispatch();
    const [request, setRequest] = useState<CreateAppointmentRequest | null>(null);
    const isEmpty = !slots || Object.keys(slots).length === 0;


    const selectSlotOrAddToCart = (slot: Slot) => {
        if (!serviceId) {
            return;
        }
        if (slot.id !== selectedSlotId) {
            dispatch(setSelectedSlotId(slot.id))
            return;
        }
        setRequest({start: slot.start.toISOString(), service: +serviceId});
    }

    return (
        <>
            <SlotsView isEmpty={isEmpty}
                       slots={slots}
                       selectedSlotId={selectedSlotId}
                       onClick={selectSlotOrAddToCart}/>
            {request && company &&
            <ProtectedRoute path={companiesUrls(company).book} params={{...request}} component={BookContainer}/>
            }
        </>
    )
}


export default SlotsContainer;
