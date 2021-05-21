import {ActionCreatorWithoutPayload, ActionCreatorWithPayload, EntitySelectors} from '@reduxjs/toolkit';
import React, {useEffect, useState} from 'react';
import {IReadModel} from 'src/app/api/common/models';
import AdminTableButtons from 'src/app/shared/admin/admin-table-buttons';
import {AdminEditContainerProps, AdminTableContainerProps} from 'src/app/shared/admin/interfaces';
import KCard from 'src/app/shared/molecules/k-card';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import { PatchActionPayload } from 'src/app/store/admin/common/adapter';

interface AdminListEditContainerProps {
    entitiesSelector: EntitySelectors<IReadModel,any>;
    filter?: (value: string | undefined) => void;
    initializerAction: ActionCreatorWithoutPayload,
    patchAction: ActionCreatorWithPayload<PatchActionPayload, string>;
    EditContainer: React.FunctionComponent<AdminEditContainerProps>;
    ListContainer: React.FunctionComponent<AdminTableContainerProps>;
}

const AdminListEditContainer: React.FunctionComponent<AdminListEditContainerProps> = (
    {
        entitiesSelector,
        filter,
        initializerAction,
        patchAction,
        EditContainer,
        ListContainer
    }) => {
    const entities = useAppSelector(entitiesSelector.selectAll)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [entity, setEntity] = useState<IReadModel | null>(null);
    const storeEntity = useAppSelector(state => entitiesSelector.selectById(state, entity?.id || 0));

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initializerAction())
    }, []);

    useEffect(() => {
        if (isSubmitting) {
            setIsSubmitting(false);
            setEntity(null);
        }
    }, [storeEntity, isSubmitting]);

    const onSubmit = (id: number) => (entity: any) => {
        setIsSubmitting(true)
        dispatch(patchAction({id, entity}));
    }

    const buttons = (entity: IReadModel) => <AdminTableButtons onEditClick={() => setEntity(entity)}
                                                               onDeleteClick={() => setEntity(entity)}/>

    return (
        <>
            {entity
                ? <KCard className="mt-2">
                    <EditContainer entity={entity} onSubmit={onSubmit(entity.id)} onCancel={() => setEntity(null)}/>
                </KCard>
                : <ListContainer entities={entities}
                                 filter={filter}
                                 buttons={buttons}
                />
            }
        </>
    )
}


export default AdminListEditContainer;
