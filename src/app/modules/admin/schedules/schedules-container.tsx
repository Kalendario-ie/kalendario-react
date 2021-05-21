import React, {useEffect} from 'react';
import SchedulesTable from 'src/app/modules/admin/schedules/table/schedules-table';
import AdminDashboard from 'src/app/shared/admin/admin-dashboard';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import {scheduleActions, scheduleSelectors} from 'src/app/store/admin/schedules';


interface SchedulesContainerProps {
}

const SchedulesContainer: React.FunctionComponent<SchedulesContainerProps> = () => {
    const dispatch = useAppDispatch()
    const schedules = useAppSelector(scheduleSelectors.selectAll)
    useEffect(() => {
        dispatch(scheduleActions.initializeStore());
    }, []);


    return (
        <AdminDashboard>
            <SchedulesTable schedules={schedules}/>
        </AdminDashboard>
    )
}


export default SchedulesContainer;
