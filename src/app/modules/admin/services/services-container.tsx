import React from 'react';
import ServiceUpsertForm from 'src/app/modules/admin/services/service-upsert-form';
import ServicesTable from 'src/app/modules/admin/services/services-table';
import AdminListEditContainer from 'src/app/shared/admin/admin-list-edit-container';
import {serviceActions, serviceSelectors} from 'src/app/store/admin/services';


interface ServicesContainerProps {
}

const ServicesContainer: React.FunctionComponent<ServicesContainerProps> = () => {
    return (
        <AdminListEditContainer baseSelectors={serviceSelectors}
                                baseActions={serviceActions}
                                EditContainer={ServiceUpsertForm}
                                ListContainer={ServicesTable}/>
    )
}


export default ServicesContainer;
