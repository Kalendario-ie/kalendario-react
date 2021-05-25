import React, {useEffect, useState} from 'react';
import {AdminEditContainerProps} from 'src/app/shared/admin/interfaces';
import KModal from 'src/app/shared/components/modal/k-modal';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import {BaseActions, BaseSelectors} from 'src/app/store/admin/common/adapter';

export function useEditModal<TEntity>(
    baseSelectors: BaseSelectors<TEntity>,
    baseActions: BaseActions,
    EditContainer: React.FunctionComponent<AdminEditContainerProps<TEntity>>
): [(entity: TEntity | null) => () => void, JSX.Element] {
    const [selectedEntity, setSelectedEntity] = useState<TEntity | null>(null);
    const apiError = useAppSelector(baseSelectors.selectApiError);
    const editMode = useAppSelector(baseSelectors.selectEditMode);
    const dispatch = useAppDispatch();

    const handleEditCancel = () => {
        setSelectedEntity(null);
        dispatch(baseActions.setEditMode(false));
    }

    const handleSubmit = (entity: any) => {
        if (!selectedEntity) {
            dispatch(baseActions.createEntity({entity}));
        } else {
            dispatch(baseActions.patchEntity({id: entity.id, entity}));
        }
    }

    const openModal = (entity: TEntity | null) => () => {
        setSelectedEntity(entity);
        dispatch(baseActions.setEditMode(true));
    }

    const modal = <KModal body={<EditContainer entity={selectedEntity}
                                               apiError={apiError}
                                               onSubmit={handleSubmit}
                                               onCancel={handleEditCancel}/>}
                          isOpen={editMode}/>

    return [openModal, modal]
}


export function useSelectAll<TEntity>(baseSelectors: BaseSelectors<TEntity>, baseActions: BaseActions) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(baseActions.initializeStore());
    }, []);

    return useAppSelector(baseSelectors.selectAll);
}
