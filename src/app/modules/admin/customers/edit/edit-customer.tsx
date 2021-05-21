import React from 'react';
import { Customer, SaveCustomerRequest } from 'src/app/api/customers';
import {KFormikForm, KFormikInput, KFormikSubmit} from 'src/app/shared/components/forms';
import KFormikCancel from 'src/app/shared/components/forms/k-formik-cancel';

interface EditCustomerProps {
    customer: Customer;
    onSubmit: (values: SaveCustomerRequest) => void;
    onCancel: () => void;
}

const EditCustomer: React.FunctionComponent<EditCustomerProps> = (
    {
        customer,
        onSubmit,
        onCancel
    }) => {
    return (
        <KFormikForm initialValues={customer} apiError={null} onSubmit={onSubmit}>
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
