import React from 'react';
import {Appointment} from 'src/app/api/appointments';
import {timeToString} from 'src/app/api/common/models';
import {Employee} from 'src/app/api/employees';
import {useSelectPanelEmployees} from 'src/app/modules/admin/appointments/employee-panel/hooks';
import {KFlexColumn, KFlexRow} from 'src/app/shared/components/flex';
import KShowOnHoverContainer from 'src/app/shared/components/primitives/containers/k-show-on-hover-container';
import {useAppSelector} from 'src/app/store';
import {adminDashboardSelectors} from 'src/app/store/admin/dashboard';
import CreateAppointmentButtons from './create-appointment-buttons';
import styles from './employee-panel.module.scss';
import EventsContainer from './event-container';

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

interface EmployeePanelProps {
    employee: Employee;
    onCreateClick: (entity: Appointment | null) => () => void;
}

const EmployeePanelBody: React.FunctionComponent<EmployeePanelProps> = (
    {
        employee,
        onCreateClick
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
                    <KShowOnHoverContainer className={styles.middleItem} style={style}>
                        <CreateAppointmentButtons employee={employee}
                                                  onCreateClick={onCreateClick}
                                                  hour={hour}
                                                  minute={0}/>
                    </KShowOnHoverContainer>
                    <KShowOnHoverContainer className={styles.panelItem} style={style}>
                        <CreateAppointmentButtons employee={employee}
                                                  onCreateClick={onCreateClick}
                                                  hour={hour}
                                                  minute={30}/>
                    </KShowOnHoverContainer>
                </React.Fragment>
            )}
        </KFlexColumn>
    )
}

export interface EmployeePanelsBodyContainerProps {
    onSelect: (entity: Appointment | null) => () => void
}

export const EmployeePanelsBodyContainer: React.FunctionComponent<EmployeePanelsBodyContainerProps> = ({onSelect}) => {
    const employees = useSelectPanelEmployees();
    return (
        <KFlexRow>
            <>
                <PanelHours/>
                {employees.map(employee =>
                    <React.Fragment key={employee.id}>
                        <EventsContainer onSelect={onSelect} employee={employee}/>
                        <EmployeePanelBody onCreateClick={onSelect} employee={employee}/>
                    </React.Fragment>
                )}
            </>
        </KFlexRow>
    )
}

