import moment, {Moment} from 'moment';
import React from 'react';
import {Button} from 'reactstrap';
import {KFlexColumn, KFlexRow} from 'src/app/shared/components/flex';
import {KDateInput} from 'src/app/shared/components/primitives/inputs';
import {KIconButton} from 'src/app/shared/components/primitives/buttons';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import {adminDashboardActions, adminDashboardSelectors} from 'src/app/store/admin/dashboard';
import styles from './scheduling-date-selector.module.scss';

const SchedulingDateSelector: React.FunctionComponent = () => {
    const currentDate = useAppSelector(adminDashboardSelectors.selectCurrentDate);
    const dispatch = useAppDispatch();

    const handleNextClick = () => {
        dispatch(adminDashboardActions.setCurrentDate(currentDate.clone().add(1, 'day')));
    }
    const handleTodayClick = () => {
        dispatch(adminDashboardActions.setCurrentDate(moment.utc()));
    }
    const handlePreviousClick = () => {
        dispatch(adminDashboardActions.setCurrentDate(currentDate.clone().subtract(1, 'day')));
    }

    const handleDateChange = (value: Moment) => {
        dispatch(adminDashboardActions.setCurrentDate(value));
    }

    return (
        <KFlexRow className={styles.dateSelectorContainer} align={'center'}>
            <KFlexColumn className="mr-2">
                <KDateInput value={currentDate} onChange={handleDateChange}/>
            </KFlexColumn>
            <Button color="primary" size="sm" onClick={handleTodayClick}>Today</Button>
            <KIconButton icon="chevron-left" color="accent" onClick={handlePreviousClick}/>
            <KIconButton icon="chevron-right" color="accent" onClick={handleNextClick}/>
        </KFlexRow>
    )
}


export default SchedulingDateSelector;
