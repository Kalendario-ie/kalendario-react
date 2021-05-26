import React from 'react';
import {timeToString} from 'src/app/api/common/models';
import {Employee} from 'src/app/api/employees';
import {useSelectPanelEmployees} from 'src/app/modules/admin/appointments/employee-panel/hooks';
import {KFlexColumn, KFlexRow} from 'src/app/shared/components/flex';
import {useAppSelector} from 'src/app/store';
import {adminDashboardSelectors} from 'src/app/store/admin/dashboard';
import styles from './employee-panel.module.scss';
import EventsContainer from './event-container';

interface EmployeePanelProps {
    employee: Employee;
}

const PanelHours: React.FunctionComponent = () => {
    const hours = useAppSelector(adminDashboardSelectors.selectPanelHours);
    const slotSize = useAppSelector(adminDashboardSelectors.selectSlotSize);

    const style: React.CSSProperties = {
        width: '5rem',
        minHeight: `${slotSize / 2}rem`,
        height: `${slotSize / 2}rem`,
        textAlign: 'right',
        position: 'relative',
        top: '-0.75rem'
    }
    return (
        <KFlexColumn className={`sticky-top-left bg-white-gray ${styles.borderRight}`}>
            {hours.map((hour, i) =>
                <React.Fragment key={i}>
                    <div style={style}>
                        {timeToString({hour, minute: 0})}
                    </div>
                    <div style={style}/>
                </React.Fragment>
            )}
        </KFlexColumn>
    )
}

const EmployeePanelBody: React.FunctionComponent<EmployeePanelProps> = (
    {
        employee
    }) => {
    const hours = useAppSelector(adminDashboardSelectors.selectPanelHours);
    const slotSize = useAppSelector(adminDashboardSelectors.selectSlotSize);

    const style = {
        height: `${slotSize / 2}rem`,
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

export const EmployeePanelsBodyContainer: React.FunctionComponent = () => {
    const employees = useSelectPanelEmployees();
    return (
        <KFlexRow>
            <>
                <PanelHours/>
                {employees.map(employee =>
                    <React.Fragment key={employee.id}>
                        <EventsContainer employee={employee}/>
                        <EmployeePanelBody employee={employee}/>
                    </React.Fragment>
                )}
            </>
        </KFlexRow>
    )
}

