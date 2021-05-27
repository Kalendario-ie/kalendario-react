import React from 'react';
import {KIconButton} from 'src/app/shared/components/primitives/buttons';
import {KFlexRow} from '../components/flex';

interface AdminTableButtonsProps {
    onEditClick: () => void;
    onDeleteClick: () => void;
}

const AdminTableButtons: React.FunctionComponent<AdminTableButtonsProps> = (
    {
        onEditClick,
        onDeleteClick
    }) => {
    return (
        <KFlexRow align="end" justify="end">
            <KIconButton color="primary"
                         icon="edit"
                         onClick={onEditClick}/>
            <KIconButton color="danger"
                         icon="trash"
                         onClick={onDeleteClick}/>
        </KFlexRow>
    )
}


export default AdminTableButtons;
