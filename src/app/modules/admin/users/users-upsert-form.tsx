import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {upsertUserRequestParser, UpsertUserRequestValidation, User} from 'src/app/api/users';
import {AdminEditContainerProps} from 'src/app/shared/admin/interfaces';
import {KFormikForm, KFormikInput} from 'src/app/shared/components/forms';
import KFormikStandardButtons from 'src/app/shared/components/forms/k-formik-standard-buttons';
import {KFormikState} from 'src/app/shared/components/forms/KFormikState';
import {useAppDispatch} from 'src/app/store';
import {employeeActions, employeeSelectors} from 'src/app/store/admin/employees';


const UsersUpsertForm: React.FunctionComponent<AdminEditContainerProps<User>> = (
    {
        entity,
        apiError,
        onSubmit,
        onCancel
    }) => {
    const dispatch = useAppDispatch();
    const employees = useSelector(employeeSelectors.selectAll)

    useEffect(() => {
        dispatch(employeeActions.initializeStore());
    }, []);

    return (
        <KFormikForm initialValues={upsertUserRequestParser(entity)}
                     apiError={apiError}
                     onSubmit={onSubmit}
                     validationSchema={UpsertUserRequestValidation}
        >
            <KFormikInput name="firstName"/>
            <KFormikInput name="lastName"/>
            <KFormikInput name="email"/>
            <KFormikInput name="employee" as={'select'} options={employees}/>
            <KFormikStandardButtons onCancel={onCancel}/>
        </KFormikForm>
    )
}


export default UsersUpsertForm;
