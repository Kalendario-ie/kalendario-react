import moment from 'moment';
import React from 'react';
import {isMobile} from 'react-device-detect';
import {FormattedMessage} from 'react-intl';
import {Slot} from 'src/app/api/companies';
import SlotButton from 'src/app/modules/companies/slots/slot-button';
import KFlexColumn from 'src/app/shared/molecules/flex/k-flex-column';
import KFlexRow from 'src/app/shared/molecules/flex/k-flex-row';
import {SlotDict} from 'src/app/store/companies';

interface SlotsViewProps {
    isEmpty: boolean;
    slots: SlotDict;
    selectedSlotId: number | null;
    onClick: (slot: Slot) => void;
}

const SlotsView: React.FunctionComponent<SlotsViewProps> = (
    {
        isEmpty,
        slots,
        selectedSlotId,
        onClick
    }) => {
    const slotComponents = (slots: Slot[]) => slots.map((slot) =>
        <SlotButton slot={slot}
                    key={slot.id}
                    isSelected={slot.id === selectedSlotId}
                    onClick={() => onClick(slot)}/>
    );

    return (
        <KFlexRow justify={isMobile ? 'center' : 'between'}>
            {slots && Object.keys(slots).map(key =>
                <KFlexColumn key={key} className="text-center">
                    <h5>{moment.utc(key).format('ddd DD/MM/YYYY')}</h5>
                    {slotComponents(slots[key])}
                </KFlexColumn>
            )}
            {isEmpty && <FormattedMessage id="COMPANY.NO-SLOTS"/>}
        </KFlexRow>
    )
}


export default SlotsView;
