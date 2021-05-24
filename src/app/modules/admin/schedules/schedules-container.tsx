import React from 'react';
import SchedulesTable from 'src/app/modules/admin/schedules/schedules-table';
import ScheduleUpsertForm from 'src/app/modules/admin/services/schedule-upsert-form';
import AdminDashboard from 'src/app/shared/admin/admin-dashboard';
import AdminListEditContainer from 'src/app/shared/admin/admin-list-edit-container';
import {scheduleActions, scheduleSelectors} from 'src/app/store/admin/schedules';


interface SchedulesContainerProps {
}

const SchedulesContainer: React.FunctionComponent<SchedulesContainerProps> = () => {
    return (
        <AdminDashboard>
            <AdminListEditContainer baseSelectors={scheduleSelectors}
                                    baseActions={scheduleActions}
                                    EditContainer={ScheduleUpsertForm}
                                    ListContainer={SchedulesTable}/>
        </AdminDashboard>
    )
}


export default SchedulesContainer;
