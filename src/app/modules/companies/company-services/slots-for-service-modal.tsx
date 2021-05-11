import React from 'react';
import {Service} from 'src/app/api/services';
import SlotsContainer from 'src/app/modules/companies/slots/slots-container';
import KModal from 'src/app/shared/components/modal/k-modal';

interface SlotsForServiceModalProps {
    service: Service | null | undefined;
    onCancel: () => void;
}

const SlotsForServiceModal: React.FunctionComponent<SlotsForServiceModalProps> = (
    {
        service,
        onCancel
    }) => {
    return (
        <KModal isOpen={!!service}
                body={<SlotsContainer/>}
                onCancel={onCancel}
        />
    )
}


export default SlotsForServiceModal;
