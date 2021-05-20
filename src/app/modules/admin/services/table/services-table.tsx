import React, {useMemo} from 'react';
import {Service} from 'src/app/api/services';
import {ServiceTableHeaders} from 'src/app/modules/admin/services/table/headers';
import KTable from 'src/app/shared/molecules/tables/k-table';
import KCard from 'src/app/shared/molecules/k-card';

interface ServicesTableProps {
    services: Service[];
}

const ServicesTable: React.FunctionComponent<ServicesTableProps> = (
    {
        services
    }) => {
    const columns = useMemo(
        () => [
            ServiceTableHeaders
        ],
        []
    )

    return (
        <KCard>
            <KTable columns={columns} data={services}/>
        </KCard>
    )
}


export default ServicesTable;
