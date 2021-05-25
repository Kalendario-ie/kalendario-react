import React from 'react';
import {FormGroup} from 'reactstrap';
import {Schedule, upsertScheduleRequestParser} from 'src/app/api/schedule';
import ScheduleFormikInput from 'src/app/modules/admin/schedules/schedule-shift-input/schedule-formik-input';
import {AdminEditContainerProps} from 'src/app/shared/admin/interfaces';
import {KFormikForm, KFormikInput} from 'src/app/shared/components/forms';
import KFormikStandardButtons from 'src/app/shared/components/forms/k-formik-standard-buttons';
import {KFlexRow} from 'src/app/shared/components/flex';


const ScheduleUpsertForm: React.FunctionComponent<AdminEditContainerProps<Schedule>> = (
    {
        entity,
        apiError,
        onSubmit,
        onCancel
    }) => {
    return (
        <KFormikForm initialValues={upsertScheduleRequestParser(entity)}
                     apiError={apiError}
                     onSubmit={onSubmit}>
            <KFormikInput name="name"/>
            <FormGroup>
                <KFlexRow align={'center'} justify={'center'}>
                    <ScheduleFormikInput name="mon"/>
                    <ScheduleFormikInput name="tue"/>
                    <ScheduleFormikInput name="wed"/>
                    <ScheduleFormikInput name="thu"/>
                    <ScheduleFormikInput name="fri"/>
                    <ScheduleFormikInput name="sat"/>
                    <ScheduleFormikInput name="sun"/>
                </KFlexRow>
            </FormGroup>
            <KFormikStandardButtons onCancel={onCancel}/>
        </KFormikForm>
    )
}


export default ScheduleUpsertForm;
