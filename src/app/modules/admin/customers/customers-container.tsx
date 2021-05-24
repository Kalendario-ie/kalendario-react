import React from 'react';
import CustomerUpsertForm from 'src/app/modules/admin/customers/customer-upsert-form';
import CustomersTable from 'src/app/modules/admin/customers/customers-table';
import AdminDashboard from 'src/app/shared/admin/admin-dashboard';
import AdminListEditContainer from 'src/app/shared/admin/admin-list-edit-container';
import {useAppDispatch} from 'src/app/store';
import {customerActions, customerSelectors} from 'src/app/store/admin/customers';


const CustomersContainer: React.FunctionComponent = () => {
    const dispatch = useAppDispatch()

    const filter = (value: string | undefined) => {
        dispatch(customerActions.fetchEntities({search: value}));
    }

    return (
        <AdminDashboard>
            <AdminListEditContainer baseSelectors={customerSelectors}
                                    baseActions={customerActions}
                                    filter={filter}
                                    EditContainer={CustomerUpsertForm}
                                    ListContainer={CustomersTable}/>
        </AdminDashboard>
    )
}


export default CustomersContainer;


