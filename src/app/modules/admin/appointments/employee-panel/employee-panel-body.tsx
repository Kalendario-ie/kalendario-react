import React from 'react';
import {Employee} from 'src/app/api/employees';
import styles from 'src/app/modules/admin/appointments/employee-panel/employee-panel.module.scss';
import {KFlexColumn} from 'src/app/shared/components/flex';
import {useAppSelector} from 'src/app/store';
import {adminDashboardSelectors} from 'src/app/store/admin/dashboard';

interface EmployeePanelProps {
    employee: Employee;
}

const EmployeePanelBody: React.FunctionComponent<EmployeePanelProps> = (
    {
        employee
    }) => {
    const hours = useAppSelector(adminDashboardSelectors.selectPanelHours);
    const slotSize = useAppSelector(adminDashboardSelectors.selectSlotSize);

    const style = {
        height: `${slotSize}rem`,
    }

    return (
        <KFlexColumn>
            {hours.map((hour, i) =>
                <React.Fragment key={i}>
                    <div className={styles.middleItem} style={style}>
                    </div>
                    <div className={styles.panelItem} style={style}>
                    </div>
                </React.Fragment>
            )}
        </KFlexColumn>
    )
}


export default EmployeePanelBody;
