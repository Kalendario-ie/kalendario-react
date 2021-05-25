import React from 'react';
import EmployeePanelBody from 'src/app/modules/admin/appointments/employee-panel/employee-panel-body';
import PanelHours from 'src/app/modules/admin/appointments/employee-panel/panel-hours';
import {KFlexRow} from 'src/app/shared/components/flex';
import {useAppSelector} from 'src/app/store';
import {adminDashboardSelectors} from 'src/app/store/admin/dashboard';
import {employeeSelectors} from 'src/app/store/admin/employees';

const EmployeePanelsContainer: React.FunctionComponent = () => {
    const selectedPanel = useAppSelector(adminDashboardSelectors.selectSelectedPanel)
    const employees = useAppSelector(state => employeeSelectors.selectByIds(state, selectedPanel?.employees || []));

    return (
        <KFlexRow>
            {selectedPanel &&
            <>
                <PanelHours/>
                {employees.map(employee =>
                    <EmployeePanelBody key={employee.id} employee={employee}/>)
                }
            </>
            }
        </KFlexRow>
    )
}

export default EmployeePanelsContainer;
