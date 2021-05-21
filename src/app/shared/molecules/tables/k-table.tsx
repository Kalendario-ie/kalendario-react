import React from 'react';
import {Column, Row, useExpanded, useFilters, useTable} from 'react-table';
import {Table} from 'reactstrap';
import {KDefaultColumnFilter} from 'src/app/shared/molecules/tables/k-default-column-filter';
import KTableBody from 'src/app/shared/molecules/tables/k-table-body';
import KTableHeader from 'src/app/shared/molecules/tables/k-table-header';


interface KTableProps<D extends object = {}> {
    columns: Array<Column<D>>
    data: D[]
    renderRowSubComponent?: (row: Row<D>) => React.ReactNode
    hover?: boolean;
    stripped?: boolean;
}

const KTable: React.FunctionComponent<KTableProps> = (
    {
        columns,
        data,
        renderRowSubComponent,
        hover = false,
        stripped = false
    }) => {
    const filterTypes = React.useMemo(
        () => ({
            text: (rows: any[], id: number, filterValue: string) => {
                return rows.filter(row => {
                    const rowValue = row.values[id]
                    return rowValue !== undefined
                        ? String(rowValue)
                            .toLowerCase()
                            .startsWith(filterValue.toLowerCase())
                        : true
                })
            },
        }),
        []
    )
    const defaultColumn = React.useMemo(() => ({Filter: KDefaultColumnFilter,}), [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        visibleColumns,
    } = useTable(
        {
            columns,
            data,
            // @ts-ignore
            defaultColumn,
            filterTypes,
        },
        useFilters,
        useExpanded,
    )


    return (
        <Table hover={hover} striped={stripped} {...getTableProps()}>
            <KTableHeader headerGroups={headerGroups}
            />
            <KTableBody getTableBodyProps={getTableBodyProps}
                        rows={rows}
                        prepareRow={prepareRow}
                        visibleColumns={visibleColumns}
                        renderRowSubComponent={renderRowSubComponent}
            />
        </Table>
    )
}


export default KTable;
