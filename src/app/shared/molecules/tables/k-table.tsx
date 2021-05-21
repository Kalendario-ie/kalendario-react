import React from 'react';
import {Column, Row, useExpanded, useFilters, useTable} from 'react-table';
import {Table} from 'reactstrap';
import {KDefaultColumnFilter} from 'src/app/shared/molecules/tables/k-default-column-filter';


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
        state,
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
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row)
                return (
                    <React.Fragment {...row.getRowProps()} key={i}>
                        <tr {
                                // @ts-ignore
                                ...renderRowSubComponent ? row.getToggleRowExpandedProps() : null
                            }>
                            {row.cells.map(cell => <td {...cell.getCellProps()}> {cell.render('Cell')}</td>)}
                        </tr>
                        {renderRowSubComponent &&
                        // @ts-ignore
                        row.isExpanded ? (
                            <tr>
                                <td colSpan={visibleColumns.length}>
                                    {renderRowSubComponent(row)}
                                </td>
                            </tr>
                        ) : null
                        }
                    </React.Fragment>
                )
            })}

            </tbody>
        </Table>
    )
}


export default KTable;
