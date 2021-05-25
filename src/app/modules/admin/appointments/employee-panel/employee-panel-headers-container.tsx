import React from 'react';
import {KFlexColumn, KFlexRow} from 'src/app/shared/components/flex';
import AvatarImg from 'src/app/shared/components/primitives/avatar-img';
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
            {employees.map(employee =>
                <KFlexColumn className={`${styles.panelItem} py-3`} align={'center'} justify={'center'}>
                    <AvatarImg size={4} key={employee.id} src={employee.photoUrl}/>
                </KFlexColumn>
            )}
        </KFlexRow>
    )
}


export default EmployeePanelHeadersContainer;
