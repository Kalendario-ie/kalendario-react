import {Field} from 'formik';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {AdminEditContainerProps} from 'src/app/shared/admin/interfaces';
import {KFormikForm, KFormikInput} from 'src/app/shared/components/forms';
import KFormikMultiSelect from 'src/app/shared/components/forms/k-formik-multi-select';
import KFormikStandardButtons from 'src/app/shared/components/forms/k-formik-standard-buttons';
import {KFormikState} from 'src/app/shared/components/forms/KFormikState';
import {useAppDispatch} from 'src/app/store';
import {scheduleActions, scheduleSelectors} from 'src/app/store/admin/schedules';
import {serviceActions, serviceSelectors} from 'src/app/store/admin/services';
import * as yup from 'yup';

const EmployeeUpsertForm: React.FunctionComponent<AdminEditContainerProps> = (
    {
        entity,
        apiError,
        onSubmit,
        onCancel
    }) => {
    const schedules = useSelector(scheduleSelectors.selectAll)
    const services = useSelector(serviceSelectors.selectAll)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(scheduleActions.initializeStore());
        dispatch(serviceActions.initializeStore());
    }, []);


    const validation = yup.object().shape({
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('Last Name is required'),
        email: yup.string().required().email(),
    });

    return (
        <KFormikForm initialValues={entity}
                     apiError={apiError}
                     onSubmit={onSubmit}
                     validationSchema={validation}
        >
            <KFormikInput name="firstName"/>
            <KFormikInput name="lastName"/>
            <KFormikInput name="email"/>
            <KFormikInput name="phone"/>
            <KFormikInput name="instagram"/>
            <KFormikInput name="schedule" selectOptions={schedules}/>
            <KFormikMultiSelect name="services" options={services}/>
            <KFormikStandardButtons onCancel={onCancel}/>
        </KFormikForm>
    )
}


export default EmployeeUpsertForm;
