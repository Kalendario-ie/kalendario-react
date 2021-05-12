import {Moment} from 'moment';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'reactstrap';
import KDateInput from 'src/app/shared/components/forms/input/k-date-input';
import KFlexRow from 'src/app/shared/molecules/flex/k-flex-row';
import {
    setSelectedDayToNextDay,
    setSelectedDateToPreviousDay,
    selectSelectedDate,
    setSelectedDate,
    setSelectedDateToToday
} from 'src/app/store/companies';

interface DateSelectorContainerProps {
}

const DateSelectorContainer: React.FunctionComponent<DateSelectorContainerProps> = () => {
    const dateFrom = useSelector(selectSelectedDate);
    const dispatch = useDispatch();
    const dateChange = (value: Moment) => dispatch(setSelectedDate(value));
    const next = () => dispatch(setSelectedDayToNextDay());
    const previous = () => dispatch(setSelectedDateToPreviousDay());
    const today = () => dispatch(setSelectedDateToToday());
    return (
        <KFlexRow>
            <Button color="accent" onClick={today}>Today</Button>
            <Button color="accent-dark" onClick={previous}>
                <i className="fa fa-chevron-left"/>
            </Button>
            <Button color="accent-dark" onClick={next}>
                <i className="fa fa-chevron-right"/>
            </Button>
            <KDateInput value={dateFrom} onChange={dateChange}/>
        </KFlexRow>
    )
}


export default DateSelectorContainer;
