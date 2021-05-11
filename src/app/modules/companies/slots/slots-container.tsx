import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SlotButton from 'src/app/modules/companies/slots/slot-button';
import KGrid from 'src/app/shared/molecules/grid/k-grid';
import {selectSelectedSlotId, selectSlots, setSelectedSlotId} from 'src/app/store/companies';

interface SlotsContainerProps {
}

const SlotsContainer: React.FunctionComponent<SlotsContainerProps> = () => {
    const slots = useSelector(selectSlots);
    const selectedSlotId = useSelector(selectSelectedSlotId);
    const dispatch = useDispatch();

    const slotComponents = slots.map((slot, key) =>
        <SlotButton slot={slot}
                    isSelected={key === selectedSlotId}
        onClick={() => dispatch(setSelectedSlotId(key))}/>
    )
    return (
        <>
            <KGrid size={6}>
                {slotComponents}
            </KGrid>
        </>
    )
}


export default SlotsContainer;
