import React from 'react';
import {FormattedMessage} from 'react-intl';
import {KFormikInput} from 'src/app/shared/components/forms';
import KModal, {KModalButtonProps} from 'src/app/shared/components/modal/k-modal';

interface ScheduleFormikInputModalProps {
    isOpen: boolean;
    accessor: string | null;
    onDeleteClick: () => void;
    onCancelClick: () => void;
}

const ScheduleFormikInputModal: React.FunctionComponent<ScheduleFormikInputModalProps> = (
    {
        isOpen,
        accessor,
        onCancelClick,
        onDeleteClick
    }) => {

    const durationInput = (
        <>
            {accessor &&
            <>
                <KFormikInput placeholder="Start" name={`${accessor}.start`} type="time"/>
                <KFormikInput placeholder="End" name={`${accessor}.end`} type="time"/>
            </>
            }
        </>
    )

    const modalButtons: KModalButtonProps[] = [
        {text: 'confirm', onClick: onCancelClick, color: 'primary'},
        {text: 'delete', onClick: onDeleteClick, color: 'danger'}
    ]


    return (
        <KModal header={<FormattedMessage id="ADMIN.SCHEDULE.EDIT-FRAME-MODAL"/>}
                body={durationInput}
                onCancel={onCancelClick}
                isOpen={isOpen}
                buttons={modalButtons}
        >
        </KModal>
    )
}


export default ScheduleFormikInputModal;
