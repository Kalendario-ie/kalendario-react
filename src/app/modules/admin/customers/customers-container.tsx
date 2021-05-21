import React, {useEffect} from 'react';
import CustomersTable from 'src/app/modules/admin/customers/table/customers-table';
import AdminDashboard from 'src/app/shared/admin/admin-dashboard';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import {customerActions, customerSelectors} from 'src/app/store/admin/customers';


const CustomersContainer: React.FunctionComponent = () => {
    const dispatch = useAppDispatch()
    const employees = useAppSelector(customerSelectors.selectAll)
    useEffect(() => {
        dispatch(customerActions.initializeStore())
    }, []);

    return (
        <AdminDashboard>
            <CustomersTable customers={employees}/>
        </AdminDashboard>
    )
}


export default CustomersContainer;
