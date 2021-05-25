import React, {useEffect, useState} from 'react';
import SchedulingPanelForm from 'src/app/modules/admin/appointments/scheduling-panels/scheduling-panel-form';
import {useEditModal} from 'src/app/shared/admin/hooks';
import {KFlexRow} from 'src/app/shared/components/flex';
import {UseConfirmationModalWithDispatch} from 'src/app/shared/components/modal/delete-confirmation-modal';
import KTextButton from 'src/app/shared/components/primitives/buttons/k-text-button';
import KIconButton from 'src/app/shared/components/primitives/k-icon-button';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import {schedulingPanelActions, schedulingPanelSelectors} from 'src/app/store/admin/panels';

const SchedulingPanelsSelector: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const schedulingPanels = useAppSelector(schedulingPanelSelectors.selectAll);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [setDeleteId, confirmDeleteModal] = UseConfirmationModalWithDispatch(schedulingPanelActions.deleteEntity);
    const [openModal, formModal] = useEditModal(schedulingPanelSelectors, schedulingPanelActions, SchedulingPanelForm);

    const selectedPanel = () => schedulingPanels[selectedIndex];

    useEffect(() => {
        dispatch(schedulingPanelActions.initializeStore());
    }, [])


    const handlePanelClick = (id: number) => () => {
        setSelectedIndex(id);
    }

    const handleDeleteClick = () => {
        setDeleteId(selectedPanel().id);
    }


    return (
        <KFlexRow align={'center'}>
            {confirmDeleteModal}
            {formModal}
            {schedulingPanels.map((panel, i) =>
                <KTextButton key={i}
                             className={selectedIndex === i ? 'underline-accent' : ''}
                             onClick={handlePanelClick(i)}
                >{panel.name}</KTextButton>)
            }
            <KIconButton color="primary" icon="plus" onClick={openModal(null)}/>
            <KIconButton color="accent" icon="edit" onClick={openModal(selectedPanel())}/>
            <KIconButton color="danger" icon="trash" onClick={handleDeleteClick}/>
        </KFlexRow>
    )
}


export default SchedulingPanelsSelector;
