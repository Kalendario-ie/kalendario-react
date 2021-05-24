import React from 'react';
import { Customer } from 'src/app/api/customers';
import {AdminEditContainerProps} from 'src/app/shared/admin/interfaces';
import {KFormikForm, KFormikInput} from 'src/app/shared/components/forms';
import KFormikStandardButtons from 'src/app/shared/components/forms/k-formik-standard-buttons';
import * as yup from 'yup';

const CustomerUpsertForm: React.FunctionComponent<AdminEditContainerProps<Customer>> = (
    {
        entity,
        apiError,
        onSubmit,
        onCancel
    }) => {
    const validation = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
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
            <KFormikStandardButtons onCancel={onCancel}/>
        </KFormikForm>
    )
}


export default CustomerUpsertForm;
