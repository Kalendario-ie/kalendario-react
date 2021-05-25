import React from 'react';
import {useInitializeEffect} from 'src/app/shared/admin/hooks';
import {KFlexColumn} from 'src/app/shared/components/flex';
import AvatarImg from 'src/app/shared/components/primitives/avatar-img';
import {useAppSelector} from 'src/app/store';
import {employeeActions, employeeSelectors} from 'src/app/store/admin/employees';

interface EmployeePanelProps {
    employeeId: number;
}

const EmployeePanel: React.FunctionComponent<EmployeePanelProps> = (
    {
        employeeId
    }) => {
    useInitializeEffect(employeeActions);
    const employee = useAppSelector(state => employeeSelectors.selectById(state, employeeId));
    return (
        <KFlexColumn>
            {employee &&
            <AvatarImg src={employee?.photoUrl}/>
            }
        </KFlexColumn>
    )
}


export default EmployeePanel;
