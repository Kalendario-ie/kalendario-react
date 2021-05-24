import React, {useEffect, useState} from 'react';
import {IReadModel} from 'src/app/api/common/models';
import AdminTableButtons from 'src/app/shared/admin/admin-table-buttons';
import {AdminEditContainerProps, AdminTableContainerProps} from 'src/app/shared/admin/interfaces';
import ConfirmationModal from 'src/app/shared/components/modal/confirmation-modal';
import KModal from 'src/app/shared/components/modal/k-modal';
import KIconButton from 'src/app/shared/components/primitives/k-icon-button';
import {KFlexRow} from 'src/app/shared/molecules/flex';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import {BaseActions, BaseSelectors} from 'src/app/store/admin/common/adapter';

interface AdminListEditContainerProps<TEntity> {
    baseSelectors: BaseSelectors<TEntity>;
    baseActions: BaseActions;
    filter?: (value: string | undefined) => void;
    EditContainer: React.FunctionComponent<AdminEditContainerProps<TEntity>>;
    ListContainer: React.FunctionComponent<AdminTableContainerProps>;
}

function AdminListEditContainer<TEntity extends IReadModel>(
    {
        baseSelectors,
        baseActions,
        filter,
        EditContainer,
        ListContainer
    }: AdminListEditContainerProps<TEntity>) {
    const [deleteId, setDeleteId] = useState<number | null>(null);
    const [selectedEntity, setSelectedEntity] = useState<TEntity | null>(null);

    const dispatch = useAppDispatch();
    const entities = useAppSelector(baseSelectors.selectAll)
    const apiError = useAppSelector(baseSelectors.selectApiError);
    const editMode = useAppSelector(baseSelectors.selectEditMode);

    useEffect(() => {
        dispatch(baseActions.initializeStore())
    }, []);

    const handleDeleteClick = (id: number | null) => () => {
        setDeleteId(id);
    }

    const handleDeleteConfirm = () => {
        dispatch(baseActions.deleteEntity(deleteId!));
        setDeleteId(null);
    }

    const handleDeleteCancel = () => {
        setDeleteId(null);
    }

    const handleCreateClick = () => {
        dispatch(baseActions.setEditMode(true));
    }

    const handleEditClick = (entity: TEntity) => () => {
        setSelectedEntity(entity);
        dispatch(baseActions.setEditMode(true));
    }

    const handleEditCancel = () => {
        setSelectedEntity(null);
        dispatch(baseActions.setEditMode(false));
    }

    const handleSubmit = (entity: any) => {
        if (!selectedEntity) {
            dispatch(baseActions.createEntity({entity}));
        } else {
            dispatch(baseActions.patchEntity({id: selectedEntity.id, entity}));
        }
    }

    const buttons = (entity: TEntity) => <AdminTableButtons onEditClick={handleEditClick(entity)}
                                                            onDeleteClick={handleDeleteClick(entity.id)}/>

    const buttonsColumn = {
        Header: () =>
            <KFlexRow justify={'end'}>
                <KIconButton color="primary" icon="plus-square" onClick={handleCreateClick}/>
            </KFlexRow>,
        id: 'buttons',
        Cell: (value: any) => buttons(value.row.original)
    }

    return (
        <>
            <ListContainer entities={entities}
                           filter={filter}
                           buttonsColumn={buttonsColumn}/>
            <ConfirmationModal messageId="COMMON.SURE-DELETE"
                               isOpen={!!deleteId}
                               onConfirm={handleDeleteConfirm}
                               onCancel={handleDeleteCancel}/>
            <KModal body={<EditContainer entity={selectedEntity}
                                         apiError={apiError}
                                         onSubmit={handleSubmit}
                                         onCancel={handleEditCancel}/>}
                    isOpen={editMode}/>
        </>
    )
}


export default AdminListEditContainer;
