import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useRouteMatch} from 'react-router-dom';
import {Slot} from 'src/app/api/companies';
import SlotsView from 'src/app/modules/companies/slots/slots-view';
import {bookSlotRequest, selectSelectedSlotId, selectSlots, setSelectedSlotId} from 'src/app/store/companies';

interface SlotsContainerProps {
}

const SlotsContainer: React.FunctionComponent<SlotsContainerProps> = () => {
    const slots = useSelector(selectSlots);
    const selectedSlotId = useSelector(selectSelectedSlotId);
    const dispatch = useDispatch();
    let {url} = useRouteMatch();
    const history = useHistory();

    const isEmpty = !slots || Object.keys(slots).length === 0;

    const selectSlotOrAddToCart = (slot: Slot) => {
        if (slot.id === selectedSlotId) {
            dispatch(bookSlotRequest(slot));
            history.push(`${url}/cart`);
        } else {
            dispatch(setSelectedSlotId(slot.id))
        }
    }
    return (
        <SlotsView isEmpty={isEmpty}
                   slots={slots}
                   selectedSlotId={selectedSlotId}
                   onClick={selectSlotOrAddToCart}/>
    )
}


export default SlotsContainer;
