import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
    PermissionGroup,
    upsertPermissionGroupRequestParser,
    UpsertPermissionRequestValidation
} from 'src/app/api/permissions';
import {AdminEditContainerProps} from 'src/app/shared/admin/interfaces';
import {KFormikForm, KFormikInput} from 'src/app/shared/components/forms';
import KFormikStandardButtons from 'src/app/shared/components/forms/k-formik-standard-buttons';
import {KFormikState} from 'src/app/shared/components/forms/KFormikState';
import {useAppDispatch} from 'src/app/store';
import {permissionsActions, permissionSelectors} from 'src/app/store/admin/permissions';


const PermissionGroupUpsertForm: React.FunctionComponent<AdminEditContainerProps<PermissionGroup>> = (
    {
        entity,
        apiError,
        onSubmit,
        onCancel
    }) => {
    const dispatch = useAppDispatch();
    const permissions = useSelector(permissionSelectors.selectAll)

    useEffect(() => {
        dispatch(permissionsActions.initializeStore());
    }, []);

    return (
        <KFormikForm initialValues={upsertPermissionGroupRequestParser(entity)}
                     apiError={apiError}
                     onSubmit={onSubmit}
                     validationSchema={UpsertPermissionRequestValidation}
        >
            <KFormikInput name="name"/>
            <KFormikInput name="permissions" as={'multi-select'} options={permissions}/>
            <KFormikStandardButtons onCancel={onCancel}/>
        </KFormikForm>
    )
}


export default PermissionGroupUpsertForm;
