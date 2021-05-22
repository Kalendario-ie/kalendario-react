import React from 'react';
import {AdminEditContainerProps} from 'src/app/shared/admin/interfaces';
import {KFormikForm, KFormikInput, KFormikSubmit} from 'src/app/shared/components/forms';
import KFormikCancel from 'src/app/shared/components/forms/k-formik-cancel';
import KFormikStandardButtons from 'src/app/shared/components/forms/k-formik-standard-buttons';

const EmployeeUpsertForm: React.FunctionComponent<AdminEditContainerProps> = (
    {
        entity,
        apiError,
        onSubmit,
        onCancel
    }) => {
    return (
        <KFormikForm initialValues={entity} apiError={apiError} onSubmit={onSubmit}>
            <KFormikInput name="firstName"/>
            <KFormikInput name="lastName"/>
            <KFormikInput name="email"/>
            <KFormikInput name="phone"/>
            <KFormikStandardButtons onCancel={onCancel}/>
        </KFormikForm>
    )
}


export default EmployeeUpsertForm;
