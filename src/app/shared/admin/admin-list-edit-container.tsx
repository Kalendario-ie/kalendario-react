import React, {useEffect} from 'react';
import {IReadModel} from 'src/app/api/common/models';
import AdminTableButtons from 'src/app/shared/admin/admin-table-buttons';
import {useEditModal} from 'src/app/shared/admin/hooks';
import {AdminEditContainerProps, AdminTableContainerProps} from 'src/app/shared/admin/interfaces';
import {UseConfirmationModalWithDispatch} from 'src/app/shared/components/modal/delete-confirmation-modal';
import {KIconButton} from 'src/app/shared/components/primitives/buttons';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import {BaseActions, BaseSelectors} from 'src/app/store/admin/common/adapter';
import {KFlexRow} from '../components/flex';

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
    const dispatch = useAppDispatch();
    const entities = useAppSelector(baseSelectors.selectAll)
    const [setDeleteId, confirmDeleteModal] = UseConfirmationModalWithDispatch(baseActions.deleteEntity);
    const [openModal, formModal] = useEditModal(baseSelectors, baseActions, EditContainer);


    useEffect(() => {
        dispatch(baseActions.initializeStore())
    }, []);

    const handleDeleteClick = (id: number) => () => {
        setDeleteId(id);
    }

    const buttons = (entity: TEntity) => <AdminTableButtons onEditClick={openModal(entity)}
                                                            onDeleteClick={handleDeleteClick(entity.id)}/>

    const buttonsColumn = {
        Header: () =>
            <KFlexRow justify={'end'}>
                <KIconButton color="primary" icon="plus-square" onClick={openModal(null)}/>
            </KFlexRow>,
        id: 'buttons',
        Cell: (value: any) => buttons(value.row.original)
    }

    return (
        <>
            {confirmDeleteModal}
            {formModal}
            <ListContainer entities={entities}
                           filter={filter}
                           buttonsColumn={buttonsColumn}/>
        </>
    )
}


export default AdminListEditContainer;
