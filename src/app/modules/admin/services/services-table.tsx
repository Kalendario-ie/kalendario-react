import React, {useEffect, useMemo} from 'react';
import {timeToString} from 'src/app/api/common/models';
import {AdminTableContainerProps} from 'src/app/shared/admin/interfaces';
import KColorBox from 'src/app/shared/components/primitives/KColorBox';
import {KSelectColumnFilter} from 'src/app/shared/molecules/tables/k-select-column-filter';
import KTable from 'src/app/shared/molecules/tables/k-table';
import KTextColumnFilter from 'src/app/shared/molecules/tables/k-text-column-filter';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import {serviceCategoryActions, serviceCategorySelectors} from 'src/app/store/admin/serviceCategories';


const ServicesTable: React.FunctionComponent<AdminTableContainerProps> = (
    {
        entities,
        buttonsColumn,
        filter,
    }) => {
    const serviceCategories = useAppSelector(serviceCategorySelectors.selectAll)
    const serviceCategoryDict = useAppSelector(serviceCategorySelectors.selectEntities)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(serviceCategoryActions.initializeStore());
    }, []);

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
                Cell: (value: any) => timeToString(value.cell.value)
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
            buttonsColumn
        ],
        [serviceCategories, serviceCategoryDict]
    )

    return (
        <KTable columns={columns} data={entities}/>
    )
}


export default ServicesTable;
