import React from 'react';
import {Appointment} from 'src/app/api/appointments';
import {Employee} from 'src/app/api/employees';
import CreateAppointmentButtons from 'src/app/modules/admin/appointments/employee-panel/create-appointment-buttons';
import {useSelectPanelEmployees} from 'src/app/modules/admin/appointments/employee-panel/hooks';
import {KFlexColumn, KFlexRow} from 'src/app/shared/components/flex';
import AvatarImg from 'src/app/shared/components/primitives/avatar-img';
import KFiller from 'src/app/shared/components/primitives/k-filler';
import styles from './employee-panel.module.scss';

interface EmployeePanelHeaderProps {
    employee: Employee;
    onCreateClick: (entity: Appointment | null) => () => void;
}

const EmployeePanelHeader: React.FunctionComponent<EmployeePanelHeaderProps> = (
    {
        employee,
        onCreateClick
    }) => {
    return (
        <KFlexColumn className={`${styles.panelItem} py-3`} align={'center'} justify={'center'}>
            {employee.name}
            <AvatarImg className="m-1" size={4} key={employee.id} src={employee.photoUrl}/>
            <KFlexRow>
                <CreateAppointmentButtons employee={employee}
                                          onCreateClick={onCreateClick}
                                          hour={0}
                                          minute={0}/>
            </KFlexRow>
        </KFlexColumn>
    )
}

interface EmployeePanelHeadersContainerProps {
    onCreateClick: (entity: Appointment | null) => () => void;
}

export const EmployeePanelHeadersContainer: React.FunctionComponent<EmployeePanelHeadersContainerProps> = (
    {
        onCreateClick
    }) => {
    const employees = useSelectPanelEmployees();

    return (
        <KFlexRow>
            <KFiller className={`bg-white-gray ${styles.panelItem}`} width={5}/>
            {employees.map(employee =>
                <EmployeePanelHeader key={employee.id} employee={employee} onCreateClick={onCreateClick}/>
            )}
        </KFlexRow>
    )
}


