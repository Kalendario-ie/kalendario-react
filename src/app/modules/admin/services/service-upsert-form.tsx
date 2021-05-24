import React from 'react';
import {createUpsertServiceRequest, Service} from 'src/app/api/services';
import {UpsertServiceRequestValidation} from 'src/app/api/services/requests';
import {AdminEditContainerProps} from 'src/app/shared/admin/interfaces';
import {KFormikForm, KFormikInput} from 'src/app/shared/components/forms';
import KFormikStandardButtons from 'src/app/shared/components/forms/k-formik-standard-buttons';
import {useAppSelector} from 'src/app/store';
import {serviceCategorySelectors} from 'src/app/store/admin/serviceCategories';

const ServiceUpsertForm: React.FunctionComponent<AdminEditContainerProps<Service>> = (
    {
        entity,
        apiError,
        onSubmit,
        onCancel
    }) => {
    const serviceCategories = useAppSelector(serviceCategorySelectors.selectAll)

    return (
        <KFormikForm initialValues={createUpsertServiceRequest(entity)}
                     apiError={apiError}
                     onSubmit={onSubmit}
                     validationSchema={UpsertServiceRequestValidation}
        >
            <KFormikInput name="category" as={'select'} options={serviceCategories}/>
            <KFormikInput name="name"/>
            <KFormikInput name="duration" as="duration"/>
            <KFormikInput name="color" as="color"/>
            <KFormikInput name="description"/>
            <KFormikInput name="cost" type="number"/>
            <KFormikStandardButtons onCancel={onCancel}/>
        </KFormikForm>
    )
}


export default ServiceUpsertForm;
