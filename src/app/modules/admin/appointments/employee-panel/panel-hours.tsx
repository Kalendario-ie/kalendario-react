import React from 'react';
import {timeToString} from 'src/app/api/common/models';
import {KFlexColumn} from 'src/app/shared/components/flex';
import {useAppSelector} from 'src/app/store';
import {adminDashboardSelectors} from 'src/app/store/admin/dashboard';
import styles from 'src/app/modules/admin/appointments/employee-panel/employee-panel.module.scss';

const PanelHours: React.FunctionComponent = () => {
    const hours = useAppSelector(adminDashboardSelectors.selectPanelHours);
    const slotSize = useAppSelector(adminDashboardSelectors.selectSlotSize);

    const style: React.CSSProperties = {
        width: '5rem',
        minHeight: `${slotSize}rem`,
        height: `${slotSize}rem`,
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


export default PanelHours;
