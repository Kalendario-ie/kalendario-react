import React from 'react';
import {timeFromString} from 'src/app/api/common/models';
import {UpsertScheduleRequestFrame} from 'src/app/api/schedule/requests';
import styles from 'src/app/modules/admin/schedules/schedule-shift-input/schedule-formik-input.module.scss';

interface ScheduleFrameProps {
    frame: UpsertScheduleRequestFrame;
    onClick: () => void;
}

const ScheduleFrame: React.FunctionComponent<ScheduleFrameProps> = (
    {
        frame,
        onClick
    }) => {
    const [start, end] = [timeFromString(frame.start), timeFromString(frame.end)];
    const top = +(start.hour + 1 + start.minute / 60) * 3
    const height = ((end.hour + end.minute / 60) - (start.hour + start.minute / 60)) * 3

    return (
        <div className={`${styles.frameBox} bg-accent c-pointer`}
             onClick={onClick}
             style={{
            top: `${top}rem`,
            height: `${height}rem`
        }}/>
    )
}


export default ScheduleFrame;
