import React, {useMemo} from 'react';
import {Service} from 'src/app/api/services';
import KColorBox from 'src/app/shared/components/primitives/KColorBox';
import {KSelectColumnFilter} from 'src/app/shared/molecules/tables/k-select-column-filter';
import KTable from 'src/app/shared/molecules/tables/k-table';

interface ServicesTableProps {
    services: Service[];
}

const ServicesTable: React.FunctionComponent<ServicesTableProps> = (
    {
        services
    }) => {
    const columns = useMemo(
        () => [
            {
                Header: 'category',
                accessor: 'category',
                Filter: KSelectColumnFilter
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Duration',
                accessor: 'duration',
            },
            {
                Header: 'Color',
                accessor: 'color',
                Cell: (value: any) => <KColorBox backgroundColor={value.cell.value}/>

            },
            {
                Header: 'Description',
                accessor: 'description',
            },
            {
                Header: 'Price',
                accessor: 'price',
            },
        ],
        []
    )

    return (
        <KTable columns={columns} data={services}/>
    )
}


export default ServicesTable;
