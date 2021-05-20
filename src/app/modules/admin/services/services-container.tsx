import React, {useEffect} from 'react';
import ServicesTable from 'src/app/modules/admin/services/table/services-table';
import AdminDashboard from 'src/app/shared/admin/admin-dashboard';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import {serviceActions, serviceSelectors} from 'src/app/store/admin/services';


interface ServicesContainerProps {
}

const ServicesContainer: React.FunctionComponent<ServicesContainerProps> = () => {
    const dispatch = useAppDispatch()
    const services = useAppSelector(serviceSelectors.selectAll)
    useEffect(() => {
        dispatch(serviceActions.initializeStore());
    }, []);


    return (
        <AdminDashboard>
            <ServicesTable services={services}/>
        </AdminDashboard>
    )
}


export default ServicesContainer;
