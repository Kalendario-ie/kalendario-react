import React from 'react';
import ServiceUpsertForm from 'src/app/modules/admin/services/service-upsert-form';
import ServicesTable from 'src/app/modules/admin/services/services-table';
import AdminDashboard from 'src/app/shared/admin/admin-dashboard';
import AdminListEditContainer from 'src/app/shared/admin/admin-list-edit-container';
import {serviceActions, serviceSelectors} from 'src/app/store/admin/services';


interface ServicesContainerProps {
}

const ServicesContainer: React.FunctionComponent<ServicesContainerProps> = () => {
    return (
        <AdminDashboard>
            <AdminListEditContainer baseSelectors={serviceSelectors}
                                    baseActions={serviceActions}
                                    EditContainer={ServiceUpsertForm}
                                    ListContainer={ServicesTable}/>
        </AdminDashboard>
    )
}


export default ServicesContainer;
