import React, {useEffect, useState} from 'react';
import {IReadModel} from 'src/app/api/common/models';
import AdminTableButtons from 'src/app/shared/admin/admin-table-buttons';
import {AdminEditContainerProps, AdminTableContainerProps} from 'src/app/shared/admin/interfaces';
import ConfirmationModal from 'src/app/shared/components/modal/confirmation-modal';
import KIconButton from 'src/app/shared/components/primitives/k-icon-button';
import {KFlexRow} from 'src/app/shared/molecules/flex';
import KCard from 'src/app/shared/molecules/k-card';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import {BaseActions, BaseSelectors} from 'src/app/store/admin/common/adapter';

interface AdminListEditContainerProps<TEntity> {
    baseSelectors: BaseSelectors<TEntity>;
    baseActions: BaseActions<TEntity>;
    entityParser: () => TEntity;
    filter?: (value: string | undefined) => void;
    EditContainer: React.FunctionComponent<AdminEditContainerProps>;
    ListContainer: React.FunctionComponent<AdminTableContainerProps>;
}

function AdminListEditContainer<TEntity extends IReadModel>(
    {
        baseSelectors,
        baseActions,
        entityParser,
        filter,
        EditContainer,
        ListContainer
    }: AdminListEditContainerProps<TEntity>) {
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteId, setDeleteId] = useState<number | null>(null);

    const dispatch = useAppDispatch();
    const entities = useAppSelector(baseSelectors.selectAll)
    const apiError = useAppSelector(baseSelectors.selectApiError);
    const selectedEntity = useAppSelector(baseSelectors.selectSelectedEntity);


    useEffect(() => {
        dispatch(baseActions.initializeStore())
    }, []);


    const onSubmit = (id: number) => (entity: any) => {
        if (id === 0) {
            dispatch(baseActions.createEntity({entity}));
        } else {
            dispatch(baseActions.patchEntity({id, entity}));
        }
    }

    const openCloseModal = (id: number | null) => {
        setModalOpen(!!id);
        setDeleteId(id);
    }

    const cancelDelete = () => {
        openCloseModal(null);
    }

    const proceedToDelete = () => {
        dispatch(baseActions.deleteEntity(deleteId!));
        openCloseModal(null);
    }

    const addClick = () => {
        dispatch(baseActions.setSelectedEntity(entityParser()));
    }

    const selectEntity = (entity: TEntity | null) => {
        dispatch(baseActions.setSelectedEntity(entity));
    }

    const buttons = (entity: TEntity) => <AdminTableButtons onEditClick={() => selectEntity(entity)}
                                                            onDeleteClick={() => openCloseModal(entity.id)}/>

    const buttonsColumn = {
        Header: () =>
            <KFlexRow justify={'end'}>
                <KIconButton color="primary" icon="plus-square" onClick={addClick}/>
            </KFlexRow>,
        id: 'buttons',
        Cell: (value: any) => buttons(value.row.original)
    }

    return (
        <>
            {selectedEntity
                ? <KCard className="mt-2">
                    <EditContainer entity={selectedEntity}
                                   apiError={apiError}
                                   onSubmit={onSubmit(selectedEntity.id)}
                                   onCancel={() => selectEntity(null)}/>
                </KCard>
                : <ListContainer entities={entities}
                                 filter={filter}
                                 buttonsColumn={buttonsColumn}
                />
            }
            <ConfirmationModal messageId="COMMON.SURE-DELETE"
                               isOpen={modalOpen}
                               onConfirm={proceedToDelete}
                               onCancel={cancelDelete}/>
        </>
    )
}


export default AdminListEditContainer;
