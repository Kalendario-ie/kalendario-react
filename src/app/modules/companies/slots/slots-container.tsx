import moment from 'moment';
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {useDispatch, useSelector} from 'react-redux';
import {Slot} from 'src/app/api/companies';
import SlotButton from 'src/app/modules/companies/slots/slot-button';
import KFlexColumn from 'src/app/shared/molecules/flex/k-flex-column';
import KFlexRow from 'src/app/shared/molecules/flex/k-flex-row';
import {selectSelectedSlotId, selectSlots, setSelectedSlotId} from 'src/app/store/companies';

interface SlotsContainerProps {
}

const SlotsContainer: React.FunctionComponent<SlotsContainerProps> = () => {
    const slots = useSelector(selectSlots);
    const selectedSlotId = useSelector(selectSelectedSlotId);
    const dispatch = useDispatch();

    const slotComponents = (slots: Slot[]) => slots.map((slot, key) =>
        <SlotButton slot={slot}
                    isSelected={slot.id === selectedSlotId}
                    onClick={() => dispatch(setSelectedSlotId(slot.id))}/>
    );
    return (
        <KFlexRow justify='between'>
            {slots && Object.keys(slots).map(key =>
                <KFlexColumn justify='around' className="text-center">
                    <h5>{moment.utc(key).format('ddd DD/MM/YYYY')}</h5>
                    {slotComponents(slots[key])}
                </KFlexColumn>
            )}
            {!slots && <FormattedMessage id="COMPANY.NO-SLOTS"/>}
        </KFlexRow>
    )
}


export default SlotsContainer;
