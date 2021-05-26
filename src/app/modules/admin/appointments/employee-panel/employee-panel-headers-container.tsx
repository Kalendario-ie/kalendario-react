import React from 'react';
import {Employee} from 'src/app/api/employees';
import {useSelectPanelEmployees} from 'src/app/modules/admin/appointments/employee-panel/hooks';
import {KFlexColumn, KFlexRow} from 'src/app/shared/components/flex';
import AvatarImg from 'src/app/shared/components/primitives/avatar-img';
import KFiller from 'src/app/shared/components/primitives/k-filler';
import styles from './employee-panel.module.scss';

interface EmployeePanelHeaderProps {
    employee: Employee;
}

const EmployeePanelHeader: React.FunctionComponent<EmployeePanelHeaderProps> = (
    {
        employee
    }) => {
    return (
        <KFlexColumn className={`${styles.panelItem} py-3`} align={'center'} justify={'center'}>
            <AvatarImg size={4} key={employee.id} src={employee.photoUrl}/>
        </KFlexColumn>
    )
}

export const EmployeePanelHeadersContainer: React.FunctionComponent = () => {
    const employees = useSelectPanelEmployees();

    return (
        <KFlexRow>
            <KFiller className={`sticky-top-left bg-white-gray ${styles.panelItem}`} width={5}/>
            {employees.map(employee => <EmployeePanelHeader key={employee.id} employee={employee}/>)}
        </KFlexRow>
    )
}


