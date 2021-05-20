import React from 'react';
import {Column, useFilters, useTable} from 'react-table';
import {Table} from 'reactstrap';
import {KDefaultColumnFilter} from 'src/app/shared/molecules/tables/k-default-column-filter';


interface KTableProps<D extends object = {}> {
    columns: Array<Column<D>>
    data: D[]
}

const KTable: React.FunctionComponent<KTableProps> = (
    {
        columns,
        data
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
    )


    return (
        <Table hover={true} {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>
                            {column.render('Header')}
                            {/* Render the columns filter UI */}
                            <div>
                                {
                                    // @ts-ignore
                                    column.canFilter ? column.render('Filter') : null
                                }
                            </div>
                        </th>
                    ))}
                </tr>
            ))}
            <tr>
                <th
                    colSpan={visibleColumns.length}
                    style={{
                        textAlign: 'left',
                    }}
                >
                </th>
            </tr>
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => <td {...cell.getCellProps()}> {cell.render('Cell')}</td>)}
                    </tr>
                )
            })}
            </tbody>
        </Table>
    )
}


export default KTable;
