import React from 'react';
import UsersTable from 'src/app/modules/admin/users/users-table';
import UsersUpsertForm from 'src/app/modules/admin/users/users-upsert-form';
import AdminDashboard from 'src/app/shared/admin/admin-dashboard';
import AdminListEditContainer from 'src/app/shared/admin/admin-list-edit-container';
import {useAppDispatch} from 'src/app/store';
import {customerActions} from 'src/app/store/admin/customers';
import {userActions, userSelectors} from 'src/app/store/admin/users';


const UsersContainer: React.FunctionComponent = () => {
    const dispatch = useAppDispatch()

    const filter = (value: string | undefined) => {
        dispatch(customerActions.fetchEntities({search: value}));
    }

    return (
        <AdminDashboard>
            <AdminListEditContainer baseSelectors={userSelectors}
                                    baseActions={userActions}
                                    filter={filter}
                                    EditContainer={UsersUpsertForm}
                                    ListContainer={UsersTable}/>
        </AdminDashboard>
    )
}


export default UsersContainer;


