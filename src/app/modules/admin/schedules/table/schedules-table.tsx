import React, {useMemo} from 'react';
import {Schedule} from 'src/app/api/schedule';
import ShiftCell from 'src/app/modules/admin/schedules/table/shift-cell';
import KTable from 'src/app/shared/molecules/tables/k-table';
import KTextColumnFilter from 'src/app/shared/molecules/tables/k-text-column-filter';

interface SchedulesTableProps {
    schedules: Schedule[];
}

const SchedulesTable: React.FunctionComponent<SchedulesTableProps> = (
    {
        schedules
    }) => {
    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
                Filter: KTextColumnFilter
            },
            ...['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map(day => (
                {
                    Header: day.toUpperCase(),
                    accessor: day,
                    Cell: (value: any) => <ShiftCell shift={value.cell.value}/>
                }
            ))
        ],
        []
    )

    return (
        <KTable columns={columns} data={schedules}/>
    )
}


export default SchedulesTable;
