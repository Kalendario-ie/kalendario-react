import React from 'react';
import {AdminEditContainerProps} from 'src/app/shared/admin/interfaces';
import {KFormikForm, KFormikInput, KFormikSubmit} from 'src/app/shared/components/forms';
import KFormikCancel from 'src/app/shared/components/forms/k-formik-cancel';

const EditCustomer: React.FunctionComponent<AdminEditContainerProps> = (
    {
        entity,
        onSubmit,
        onCancel
    }) => {
    return (
        <KFormikForm initialValues={entity} apiError={null} onSubmit={onSubmit}>
            <KFormikInput name="firstName"/>
            <KFormikInput name="lastName"/>
            <KFormikInput name="email"/>
            <KFormikInput name="phone"/>
            <KFormikSubmit/>
            <KFormikCancel onClick={onCancel}/>
        </KFormikForm>
    )
}


export default EditCustomer;
