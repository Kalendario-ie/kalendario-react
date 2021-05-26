import {useFormikContext} from 'formik';
import moment, {Moment} from 'moment';
import React, {ChangeEvent, useEffect, useState} from 'react';
import {Input} from 'reactstrap';
import {timeToString} from 'src/app/api/common/models';
import {KFlexRow} from 'src/app/shared/components/flex';
import {KFormikInput} from 'src/app/shared/components/forms';
import KDateInput from 'src/app/shared/components/primitives/k-date-input';
import {stringToMoment} from 'src/app/shared/util/moment-helpers';
import {useAppSelector} from 'src/app/store';
import {employeeSelectors} from 'src/app/store/admin/employees';
import {serviceSelectors} from 'src/app/store/admin/services';

function addHours(date: Moment, time: string): string {
    const momentTime = moment.utc(time, 'HH:mm')
    return date.clone()
        .add(momentTime.hour(), 'hour')
        .add(momentTime.minutes(), 'minutes')
        .toISOString();
}

function useDateHelper(name: string): [Moment, (value: Moment) => void, string, (event: ChangeEvent<HTMLInputElement>) => void] {
    const formik = useFormikContext();
    const {value} = formik.getFieldMeta<string>(name);
    const {setValue} = formik.getFieldHelpers(name);

    const momentValue = stringToMoment(value);
    const [time, setTime] = useState(momentValue.format('HH:mm'));

    useEffect(() => {
        const momentValue = stringToMoment(value);
        setTime(momentValue.format('HH:mm'))
    }, [value]);

    const handleDateChange = (value: Moment) => {
        setValue((addHours(value.startOf('day'), time)));

    }
    const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTime(e.target.value);
        setValue((addHours(momentValue.startOf('day'), e.target.value)));

    }


    return [momentValue, handleDateChange, time, handleTimeChange]
}

const FormikStartEndTimeInput: React.FunctionComponent = () => {
    const [start, handleDateChange, startTime, handleStartTimeChange] = useDateHelper('start');
    const [, , endTime, handleEndTimeChange] = useDateHelper('end');

    return (
        <KFlexRow>
            <KDateInput value={start} onChange={handleDateChange}/>
            <Input value={startTime} onChange={handleStartTimeChange} type={'time'}/>
            <Input value={endTime} onChange={handleEndTimeChange} type={'time'}/>
        </KFlexRow>
    )
}

function useEmployeeServices() {
    const formik = useFormikContext();
    const employeeId = formik.getFieldProps<number>('employee').value;
    const [employeeServices, setEmployeeServices] = useState<number[]>([]);
    const employeeEntities = useAppSelector(employeeSelectors.selectEntities);

    useEffect(() => {
        setEmployeeServices(employeeEntities[employeeId]?.services || [])
    }, [employeeId]);

    return useAppSelector((state) => serviceSelectors.selectByIds(state, employeeServices));
}

function useUpdateEndTimeOnServiceChangeEffect() {
    const formik = useFormikContext();
    const serviceId = formik.getFieldProps<number>('service').value;
    const service = useAppSelector((state) => serviceSelectors.selectById(state, serviceId));
    const {value} = formik.getFieldProps('start');
    const {setValue} = formik.getFieldHelpers('end');

    useEffect(() => {
        if (service) {
            setValue(addHours(stringToMoment(value), timeToString(service.duration)))
        }
    }, [serviceId]);
}

const CustomerAppointmentUpsertForm: React.FunctionComponent = () => {
    const employees = useAppSelector(employeeSelectors.selectAll);
    const services = useEmployeeServices();
    useUpdateEndTimeOnServiceChangeEffect();

    return (
        <>
            <FormikStartEndTimeInput/>
            <KFormikInput name="employee" as={'select'} options={employees}/>
            <KFormikInput name="service" as={'select'} options={services}/>
            <KFormikInput name="internalNotes" as={'textarea'}/>
        </>
    )
}


export default CustomerAppointmentUpsertForm;
