import React from 'react';
import EmployeePanelBody from 'src/app/modules/admin/appointments/employee-panel/employee-panel-body';
import {useSelectPanelEmployees} from 'src/app/modules/admin/appointments/employee-panel/hooks';
import PanelHours from 'src/app/modules/admin/appointments/employee-panel/panel-hours';
import {KFlexRow} from 'src/app/shared/components/flex';

const EmployeePanelsBodyContainer: React.FunctionComponent = () => {
    const employees = useSelectPanelEmployees();
    return (
        <KFlexRow>
            <>
                <PanelHours/>
                {employees.map(employee =>
                    <EmployeePanelBody key={employee.id} employee={employee}/>)
                }
            </>
        </KFlexRow>
    )
}

export default EmployeePanelsBodyContainer;
