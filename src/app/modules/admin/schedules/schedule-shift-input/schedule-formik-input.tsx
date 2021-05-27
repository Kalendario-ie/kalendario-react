import {useFormikContext} from 'formik';
import React, {useState} from 'react';
import {timeToString} from 'src/app/api/common/models';
import {UpsertScheduleRequestFrame} from 'src/app/api/schedule/requests';
import ScheduleFormikInputModal from 'src/app/modules/admin/schedules/schedule-shift-input/schedule-formik-input-modal';
import ScheduleFrame from 'src/app/modules/admin/schedules/schedule-shift-input/schedule-frame';
import {KFlexColumn} from 'src/app/shared/components/flex';
import {KIconButton} from 'src/app/shared/components/primitives/buttons';
import KShowOnHoverContainer from 'src/app/shared/components/primitives/containers/k-show-on-hover-container';
import styles from './schedule-formik-input.module.scss';

// interface HourCellProps {
//     className: string;
//     isMonday: boolean;
//     hour: number;
//     onClick: () => void;
// }
//
// const HourCell: React.FunctionComponent<HourCellProps> = (
//     {
//         className,
//         isMonday,
//         hour,
//         onClick
//     }) => {
//
//
//     return (
//         <KFlexColumn>
//
//         </KFlexColumn>
//     )
// }

interface ScheduleFormikInputProps {
    name: string;

}

const ScheduleFormikInput: React.FunctionComponent<ScheduleFormikInputProps> = (
    {
        name
    }) => {
    const formik = useFormikContext();
    const accessor = `${name}.frames`;
    const formikValues = formik.getFieldProps<UpsertScheduleRequestFrame[]>(accessor);
    const formikHelpers = formik.getFieldHelpers(accessor);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const isMonday = name === 'mon';
    const hours = Array.from(Array(24).keys());
    const className = `${styles.lineCell} ${isMonday ? '' : styles.borderLeft}`;

    const handleAddClick = (hour: number) => () => {
        const newFrame = {start: timeToString({hour, minute: 0}), end: timeToString({hour: hour + 1, minute: 0})};
        const values = [...formikValues.value, newFrame];
        formikHelpers.setValue(values);
        setSelectedIndex(values.length - 1);
    }

    const handleFrameClick = (index: number) => () => {
        console.log(index);
        setSelectedIndex(index);
    }

    const handleModalCancel = () => {
        setSelectedIndex(null);
    }

    const handleModalDelete = () => {
        const toDelete = selectedIndex!;
        setSelectedIndex(null);
        formikValues.value.splice(toDelete, 1);
    }

    const hourCell = (hour: number) =>
        <KFlexColumn className="position-relative">
            {isMonday && <div className={styles.hourBox}>{timeToString({hour, minute: 0})}</div>}
            <KShowOnHoverContainer className={className}>
                <KIconButton color="primary" onClick={handleAddClick(hour)} icon="plus-square"/>
            </KShowOnHoverContainer>
        </KFlexColumn>

    return (
        <>
            <KFlexColumn className="position-relative" align={'center'}>
                <div className={className}>{name}</div>
                {formikValues.value.map((frame, i) =>
                    <ScheduleFrame key={i}
                                   frame={frame}
                                   onClick={handleFrameClick(i)}/>
                )}
                {hours.map((hour, i) => hourCell(hour))}
            </KFlexColumn>
            <ScheduleFormikInputModal isOpen={!!selectedIndex}
                                      accessor={`${accessor}[${selectedIndex}]`}
                                      onCancelClick={handleModalCancel}
                                      onDeleteClick={handleModalDelete}
            />

        </>

    )
}


export default ScheduleFormikInput;
