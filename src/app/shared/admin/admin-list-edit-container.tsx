import React, {useEffect} from 'react';
import {PermissionModel, PermissionType} from 'src/app/api/auth';
import {IReadModel} from 'src/app/api/common/models';
import DeleteButton from 'src/app/shared/admin/delete-button';
import {useEditModal} from 'src/app/shared/admin/hooks';
import {AdminEditContainerProps, AdminTableContainerProps} from 'src/app/shared/admin/interfaces';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import {BaseActions, BaseSelectors} from 'src/app/store/admin/common/adapter';
import {KFlexRow} from '../components/flex';
import AdminButton from './admin-button';

interface AdminListEditContainerProps<TEntity> {
    baseSelectors: BaseSelectors<TEntity>;
    baseActions: BaseActions;
    modelType: PermissionModel;
    filter?: (value: string | undefined) => void;
    EditContainer: React.FunctionComponent<AdminEditContainerProps<TEntity>>;
    ListContainer: React.FunctionComponent<AdminTableContainerProps<TEntity>>;
}

function AdminListEditContainer<TEntity extends IReadModel>(
    {
        baseSelectors,
        baseActions,
        filter,
        modelType,
        EditContainer,
        ListContainer
    }: AdminListEditContainerProps<TEntity>) {
    const dispatch = useAppDispatch();
    const entities = useAppSelector(baseSelectors.selectAll)
    const [openModal, formModal] = useEditModal(baseSelectors, baseActions, EditContainer);


    useEffect(() => {
        dispatch(baseActions.initializeStore())
    }, [baseActions, dispatch]);


    const buttonsColumn = React.useMemo(() =>
        ({
            Header: () =>
                <KFlexRow justify={'end'}>
                    <AdminButton type={PermissionType.add}
                                 model={modelType}
                                 onClick={openModal(null)}/>
                </KFlexRow>,
            id: 'buttons',
            Cell: (value: any) => (
                <KFlexRow align="end" justify="end">
                    <AdminButton type={PermissionType.change}
                                 model={modelType}
                                 onClick={openModal(value.row.original)}/>
                    <DeleteButton entity={value.row.original}
                                  modelType={modelType}
                                  baseActions={baseActions}/>
                </KFlexRow>
            )
        }), [modelType, openModal])

    return (
        <>
            {formModal}
            <ListContainer entities={entities}
                           filter={filter}
                           buttonsColumn={buttonsColumn}/>
        </>
    )
}


export default AdminListEditContainer;
