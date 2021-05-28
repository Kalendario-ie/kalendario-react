import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {upsertUserRequestParser, UpsertUserRequestValidation, User} from 'src/app/api/users';
import {useSelectAll} from 'src/app/shared/admin/hooks';
import {AdminEditContainerProps} from 'src/app/shared/admin/interfaces';
import {KFormikForm, KFormikInput} from 'src/app/shared/components/forms';
import {useAppDispatch} from 'src/app/store';
import {employeeActions, employeeSelectors} from 'src/app/store/admin/employees';
import {permissionGroupActions, permissionGroupSelectors} from 'src/app/store/admin/permissionGroups';


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
    const groups = useSelectAll(permissionGroupSelectors, permissionGroupActions);


    return (
        <KFormikForm initialValues={upsertUserRequestParser(entity)}
                     apiError={apiError}
                     onSubmit={onSubmit}
                     onCancel={onCancel}
                     validationSchema={UpsertUserRequestValidation}
        >
            <KFormikInput name="firstName"/>
            <KFormikInput name="lastName"/>
            <KFormikInput name="email"/>
            <KFormikInput name="groups" as={'multi-select'} options={groups}/>
            <KFormikInput name="employee" as={'select'} options={employees}/>
        </KFormikForm>
    )
}


export default UsersUpsertForm;
