import React from 'react';
import {Employee} from 'src/app/api/employees';
import {KFlexColumn} from 'src/app/shared/components/flex';
import AvatarImg from 'src/app/shared/components/primitives/avatar-img';
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


export default EmployeePanelHeader;
