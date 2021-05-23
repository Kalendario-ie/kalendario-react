import React, {useEffect} from 'react';
import ServicesTable from 'src/app/modules/admin/services/services-table';
import AdminDashboard from 'src/app/shared/admin/admin-dashboard';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import {serviceCategoriesActions, serviceCategoriesSelectors} from 'src/app/store/admin/serviceCategories';
import {serviceActions, serviceSelectors} from 'src/app/store/admin/services';


interface ServicesContainerProps {
}

const ServicesContainer: React.FunctionComponent<ServicesContainerProps> = () => {
    const dispatch = useAppDispatch()
    const services = useAppSelector(serviceSelectors.selectAll)
    const serviceCategories = useAppSelector(serviceCategoriesSelectors.selectAll)
    const serviceCategoryDict = useAppSelector(serviceCategoriesSelectors.selectEntities)
    useEffect(() => {
        dispatch(serviceActions.initializeStore());
        dispatch(serviceCategoriesActions.initializeStore());
    }, []);


    return (
        <AdminDashboard>
            <ServicesTable
                services={services}
                serviceCategories={serviceCategories}
                serviceCategoryDict={serviceCategoryDict}
            />
        </AdminDashboard>
    )
}


export default ServicesContainer;
