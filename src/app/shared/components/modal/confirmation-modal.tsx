import React from 'react';
import {FormattedMessage} from 'react-intl';
import KModal, {KModalButtonProps} from 'src/app/shared/components/modal/k-modal';

interface ConfirmationModalProps {
    messageId: string;
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmationModal: React.FunctionComponent<ConfirmationModalProps> = (
    {
        messageId,
        isOpen,
        onCancel,
        onConfirm

    }) => {

    const buttons: KModalButtonProps[] = [
        {
            text: 'confirm',
            color: 'primary',
            onClick: onConfirm
        },
        {
            text: 'cancel',
            color: 'danger',
            onClick: onCancel
        }
    ]

    return (
        <KModal
            body={<FormattedMessage id={messageId}/>}
            isOpen={isOpen}
            buttons={buttons}
        />
    )
}


export default ConfirmationModal;
