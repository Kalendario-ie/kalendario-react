import React, {useState} from 'react';
import {timeToString} from 'src/app/api/common/models';
import styles from 'src/app/modules/admin/schedules/schedule-shift-input/schedule-formik-input.module.scss';
import KIconButton from 'src/app/shared/components/primitives/k-icon-button';
import {KFlexRow} from 'src/app/shared/components/flex';

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
    const [showIcon, setShowIcon] = useState(false);

    const handleMouseEnter = () => setShowIcon(true);
    const handleMouseOut = () => setShowIcon(false);

    return (
        <KFlexRow
            align={'center'}
            justify={'center'}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseOut}
            className={`${className} position-relative`}
        >
            {isMonday && <div className={styles.hourBox}>{timeToString({hour, minute: 0})}</div>}
            {showIcon &&
            <KIconButton color="primary" onClick={onClick} icon="plus-square"/>
            }
        </KFlexRow>

    )
}


export default HourCell;
