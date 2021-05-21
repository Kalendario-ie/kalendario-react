import React from 'react';
import {ColumnInstance, Row, TablePropGetter, TableProps} from 'react-table';

interface KTableBodyProps {
    getTableBodyProps: (propGetter?: TablePropGetter<object>) => TableProps;
    rows: Array<Row<object>>;
    prepareRow: (row: Row<object>) => void;
    visibleColumns: Array<ColumnInstance<object>>;
    renderRowSubComponent?: (row: Row<object>) => React.ReactNode;
}

const KTableBody: React.FunctionComponent<KTableBodyProps> = (
    {
        getTableBodyProps,
        rows,
        prepareRow,
        visibleColumns,
        renderRowSubComponent
    }) => {
    return (
        <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
            prepareRow(row)
            return (
                <React.Fragment key={i}>
                    <tr {
                            // @ts-ignore
                            ...renderRowSubComponent ? row.getToggleRowExpandedProps() : null
                        }>
                        {row.cells.map(cell => <td {...cell.getCellProps()}> {cell.render('Cell')}</td>)}
                    </tr>
                    {renderRowSubComponent &&
                    // @ts-ignore
                    row.isExpanded ? (
                        <tr {...row.getRowProps()}>
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
    )
}


export default KTableBody;
