import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Employee} from 'src/app/api/employees';
import {AdminEditContainerProps} from 'src/app/shared/admin/interfaces';
import {KFormikForm, KFormikInput} from 'src/app/shared/components/forms';
import KFormikMultiSelect from 'src/app/shared/components/forms/k-formik-multi-select';
import KFormikStandardButtons from 'src/app/shared/components/forms/k-formik-standard-buttons';
import AvatarImg from 'src/app/shared/components/primitives/avatar-img';
import {KFlexColumn} from 'src/app/shared/molecules/flex';
import {useAppDispatch} from 'src/app/store';
import {scheduleActions, scheduleSelectors} from 'src/app/store/admin/schedules';
import {serviceActions, serviceSelectors} from 'src/app/store/admin/services';
import {number} from 'yup';
import * as yup from 'yup';

const EmployeeUpsertForm: React.FunctionComponent<AdminEditContainerProps<Employee>> = (
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
        phone: yup.string().required(),
        services: yup.array(number()).required().min(1)
    });

    return (
        <KFormikForm initialValues={entity}
                     apiError={apiError}
                     onSubmit={onSubmit}
                     validationSchema={validation}
        >
            {entity?.photoUrl &&
            <KFlexColumn className="mb-2" justify={'center'} align={'center'}>
                <AvatarImg size={3} src={entity.photoUrl}/>
            </KFlexColumn>
            }
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
