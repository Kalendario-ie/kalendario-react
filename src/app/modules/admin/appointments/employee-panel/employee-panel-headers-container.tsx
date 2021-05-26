import React from 'react';
import EmployeePanelHeader from 'src/app/modules/admin/appointments/employee-panel/employee-panel-header';
import styles from 'src/app/modules/admin/appointments/employee-panel/employee-panel.module.scss';
import {useSelectPanelEmployees} from 'src/app/modules/admin/appointments/employee-panel/hooks';
import {KFlexRow} from 'src/app/shared/components/flex';
import KFiller from 'src/app/shared/components/primitives/k-filler';


const EmployeePanelHeadersContainer: React.FunctionComponent = () => {
    const employees = useSelectPanelEmployees();

    return (
        <KFlexRow>
            <KFiller className={`sticky-top-left bg-white-gray ${styles.panelItem}`} width={5}/>
            {employees.map(employee => <EmployeePanelHeader key={employee.id} employee={employee}/>)}
        </KFlexRow>
    )
}


export default EmployeePanelHeadersContainer;
