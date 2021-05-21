import React, {useEffect, useState} from 'react';
import {Customer} from 'src/app/api/customers';
import CustomersTable from 'src/app/modules/admin/customers/table/customers-table';
import AdminDashboard from 'src/app/shared/admin/admin-dashboard';
import AdminTableButtons from 'src/app/shared/admin/admin-table-buttons';
import KCard from 'src/app/shared/molecules/k-card';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import {customerActions, customerSelectors} from 'src/app/store/admin/customers';
import EditCustomer from './edit/edit-customer';


const CustomersContainer: React.FunctionComponent = () => {
    const [customer, setCustomer] = useState<Customer | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useAppDispatch()
    const employees = useAppSelector(customerSelectors.selectAll)
    const selectedCustomer = useAppSelector(state => customerSelectors.selectById(state, customer?.id || 0));

    useEffect(() => {
        dispatch(customerActions.initializeStore())
    }, []);

    useEffect(() => {
        if (isSubmitting) {
            setIsSubmitting(false);
            setCustomer(null);
        }
    }, [selectedCustomer, isSubmitting]);


    const filter = (value: string | undefined) => {
        dispatch(customerActions.fetchEntities({search: value}));
    }

    const editClick = (customer: Customer) => () => {
        setCustomer(customer);
    }

    const onSubmit = (id: number) => (entity: any) => {
        setIsSubmitting(true)
        dispatch(customerActions.patchEntity({id, entity}))
    }

    return (
        <AdminDashboard>
            {customer
                ? <KCard className="mt-2">
                    <EditCustomer customer={customer} onSubmit={onSubmit(customer.id)} onCancel={() => setCustomer(null)}/>
                </KCard>
                : <CustomersTable customers={employees}
                                  filter={filter}
                                  buttons={customer => (<AdminTableButtons onEditClick={() => setCustomer(customer)}
                                                                           onDeleteClick={editClick(customer)}/>)}
                />
            }
        </AdminDashboard>
    )
}


export default CustomersContainer;
