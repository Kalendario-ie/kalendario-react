import React from 'react';
import {AdminEditContainerProps} from 'src/app/shared/admin/interfaces';
import {KFormikForm, KFormikInput, KFormikSubmit} from 'src/app/shared/components/forms';
import KFormikCancel from 'src/app/shared/components/forms/k-formik-cancel';
import * as yup from 'yup';

const CustomerUpsertForm: React.FunctionComponent<AdminEditContainerProps> = (
    {
        entity,
        apiError,
        onSubmit,
        onCancel
    }) => {
    const validation = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.number().required(),
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
            <KFormikInput name="email" type="email"/>
            <KFormikInput name="phone"/>
            <KFormikSubmit/>
            <KFormikCancel onClick={onCancel}/>
        </KFormikForm>
    )
}


export default CustomerUpsertForm;
