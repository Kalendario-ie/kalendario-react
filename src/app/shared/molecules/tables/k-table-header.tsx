import React from 'react';
import {HeaderGroup} from 'react-table';
import {Table} from 'reactstrap';

interface KTableHeaderProps {
    headerGroups: Array<HeaderGroup<object>>;
}

const KTableHeader: React.FunctionComponent<KTableHeaderProps> = (
    {
        headerGroups
    }) => {
    return (
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
    )
}


export default KTableHeader;
