import { Dictionary } from '@reduxjs/toolkit';
import React, {useMemo} from 'react';
import {Service, ServiceCategory} from 'src/app/api/services';
import KColorBox from 'src/app/shared/components/primitives/KColorBox';
import {KSelectColumnFilter} from 'src/app/shared/molecules/tables/k-select-column-filter';
import KTable from 'src/app/shared/molecules/tables/k-table';
import KTextColumnFilter from 'src/app/shared/molecules/tables/k-text-column-filter';

interface ServicesTableProps {
    services: Service[];
    serviceCategories: ServiceCategory[];
    serviceCategoryDict: Dictionary<ServiceCategory>;
}

const ServicesTable: React.FunctionComponent<ServicesTableProps> = (
    {
        services,
        serviceCategories,
        serviceCategoryDict
    }) => {
    const columns = useMemo(
        () => [
            {
                Header: 'category',
                accessor: 'category',
                Filter: (props: any) => <KSelectColumnFilter {...props} options={serviceCategories}/>,
                Cell: (value: any) => <>{serviceCategoryDict[value.cell.value]?.name}</>
            },
            {
                Header: 'Name',
                accessor: 'name',
                Filter: KTextColumnFilter
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
        [serviceCategories, serviceCategoryDict]
    )

    return (
        <KTable columns={columns} data={services}/>
    )
}


export default ServicesTable;
