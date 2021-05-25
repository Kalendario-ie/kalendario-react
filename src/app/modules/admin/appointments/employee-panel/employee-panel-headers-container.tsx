import React from 'react';
import EmployeePanelHeader from 'src/app/modules/admin/appointments/employee-panel/employee-panel-header';
import {KFlexRow} from 'src/app/shared/components/flex';
import KFiller from 'src/app/shared/components/primitives/k-filler';
import {useAppSelector} from 'src/app/store';
import {adminDashboardSelectors} from 'src/app/store/admin/dashboard';
import {employeeSelectors} from 'src/app/store/admin/employees';
import styles from 'src/app/modules/admin/appointments/employee-panel/employee-panel.module.scss';


const EmployeePanelHeadersContainer: React.FunctionComponent = () => {
    const selectedPanel = useAppSelector(adminDashboardSelectors.selectSelectedPanel)
    const employees = useAppSelector(state => employeeSelectors.selectByIds(state, selectedPanel?.employees || []));

    return (
        <KFlexRow>
            <KFiller className={`sticky-top-left bg-white-gray ${styles.panelItem}`} width={5}/>
            {employees.map(employee => <EmployeePanelHeader key={employee.id} employee={employee}/>)}
        </KFlexRow>
    )
}


export default EmployeePanelHeadersContainer;
