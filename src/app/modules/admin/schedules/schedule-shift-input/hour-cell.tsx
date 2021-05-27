import React from 'react';
import {timeToString} from 'src/app/api/common/models';
import styles from 'src/app/modules/admin/schedules/schedule-shift-input/schedule-formik-input.module.scss';
import {KIconButton} from 'src/app/shared/components/primitives/buttons';
import KShowOnHoverContainer from 'src/app/shared/components/primitives/containers/k-show-on-hover-container';

interface HourCellProps {
    className: string;
    isMonday: boolean;
    hour: number;
    onClick: () => void;
}

const HourCell: React.FunctionComponent<HourCellProps> = (
    {
        className,
        isMonday,
        hour,
        onClick
    }) => {


    return (
        <KShowOnHoverContainer className={className}>
            {isMonday && <div className={styles.hourBox}>{timeToString({hour, minute: 0})}</div>}
            <KIconButton color="primary" onClick={onClick} icon="plus-square"/>
        </KShowOnHoverContainer>
    )
}


export default HourCell;
