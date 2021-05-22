import {ActionCreatorWithoutPayload, ActionCreatorWithPayload} from '@reduxjs/toolkit';
import React, {useEffect, useState} from 'react';
import {IReadModel} from 'src/app/api/common/models';
import AdminTableButtons from 'src/app/shared/admin/admin-table-buttons';
import {AdminEditContainerProps, AdminTableContainerProps} from 'src/app/shared/admin/interfaces';
import ConfirmationModal from 'src/app/shared/components/modal/confirmation-modal';
import KIconButton from 'src/app/shared/components/primitives/k-icon-button';
import {KFlexRow} from 'src/app/shared/molecules/flex';
import KCard from 'src/app/shared/molecules/k-card';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import {BaseSelectors, CreateActionPayload, PatchActionPayload} from 'src/app/store/admin/common/adapter';

interface AdminListEditContainerProps {
    entitiesSelector: BaseSelectors;
    filter?: (value: string | undefined) => void;
    initializerAction: any,
    createAction: ActionCreatorWithPayload<CreateActionPayload, string>;
    patchAction: ActionCreatorWithPayload<PatchActionPayload, string>;
    deleteAction: ActionCreatorWithPayload<number, string>;
    EditContainer: React.FunctionComponent<AdminEditContainerProps>;
    ListContainer: React.FunctionComponent<AdminTableContainerProps>;
}

const AdminListEditContainer: React.FunctionComponent<AdminListEditContainerProps> = (
    {
        entitiesSelector,
        filter,
        initializerAction,
        createAction,
        patchAction,
        deleteAction,
        EditContainer,
        ListContainer
    }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [entity, setEntity] = useState<IReadModel | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteId, setDeleteId] = useState<number | null>(null);

    const dispatch = useAppDispatch();
    const entities = useAppSelector(entitiesSelector.selectAll)
    const storeEntity = useAppSelector(state => entitiesSelector.selectById(state, entity?.id || 0));
    const apiError = useAppSelector(entitiesSelector.selectApiError);


    useEffect(() => {
        dispatch(initializerAction())
    }, []);

    useEffect(() => {
        if (isSubmitting) {
            setIsSubmitting(false);
            setEntity(null);
        }
    }, [storeEntity]);

    const onSubmit = (id: number) => (entity: any) => {
        setIsSubmitting(true)
        if (id === 0) {
            dispatch(createAction({entity}));
        } else {
            dispatch(patchAction({id, entity}));
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
        dispatch(deleteAction(deleteId!));
        openCloseModal(null);
    }

    const addClick = () => {
        setEntity({id: 0, name: ''});
    }

    const buttons = (entity: IReadModel) => <AdminTableButtons onEditClick={() => setEntity(entity)}
                                                               onDeleteClick={() => openCloseModal(entity.id)}/>

    const buttonsColumn = {
        Header: () => <KFlexRow justify={'end'}><KIconButton color="primary" icon="plus-square" onClick={addClick}/></KFlexRow>,
            id: 'buttons',
            Cell: (value: any) => buttons(value.row.original)
        }

    return (
        <>
            {entity
                ? <KCard className="mt-2">
                    <EditContainer entity={entity}
                                   apiError={apiError}
                                   onSubmit={onSubmit(entity.id)}
                                   onCancel={() => setEntity(null)}/>
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
