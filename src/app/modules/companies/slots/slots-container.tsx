import moment from 'moment';
import React from 'react';
import {isMobile} from 'react-device-detect';
import {FormattedMessage} from 'react-intl';
import {useDispatch, useSelector} from 'react-redux';
import {Slot} from 'src/app/api/companies';
import SlotButton from 'src/app/modules/companies/slots/slot-button';
import KFlexColumn from 'src/app/shared/molecules/flex/k-flex-column';
import KFlexRow from 'src/app/shared/molecules/flex/k-flex-row';
import {bookSlotRequest, selectSelectedSlotId, selectSlots, setSelectedSlotId} from 'src/app/store/companies';

interface SlotsContainerProps {
}

const SlotsContainer: React.FunctionComponent<SlotsContainerProps> = () => {
    const slots = useSelector(selectSlots);
    const selectedSlotId = useSelector(selectSelectedSlotId);
    const dispatch = useDispatch();

    const isEmpty = !slots || Object.keys(slots).length === 0;

    const selectSlotOrAddToCart = (slotId: number) => {
        if (slotId === selectedSlotId) {
            dispatch(setSelectedSlotId(slotId))
        } else {
            dispatch(bookSlotRequest())
        }
    }

    const slotComponents = (slots: Slot[]) => slots.map((slot) =>
        <SlotButton slot={slot}
                    key={slot.id}
                    isSelected={slot.id === selectedSlotId}
                    onClick={() => selectSlotOrAddToCart(slot.id)}/>
    );
    return (
        <KFlexRow justify={isMobile ? 'center' : 'between'}>
            {slots && Object.keys(slots).map(key =>
                <KFlexColumn key={key} justify='around' className="text-center">
                    <h5>{moment.utc(key).format('ddd DD/MM/YYYY')}</h5>
                    {slotComponents(slots[key])}
                </KFlexColumn>
            )}
            {isEmpty && <FormattedMessage id="COMPANY.NO-SLOTS"/>}
        </KFlexRow>
    )
}


export default SlotsContainer;
