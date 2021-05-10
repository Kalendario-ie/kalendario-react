import React from 'react';
import {FormikHelpers, FormikProps} from 'formik/dist/types';
import {Formik} from 'formik';
import {ApiValidationError} from '../../../api/common/api-errors';
import {Form, FormGroup} from 'reactstrap';

export interface KFormProps<Values> {
    initialValues: Values;
    apiError: ApiValidationError | null;
    validationSchema?: any | (() => any);
    onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void;
    children: ((props: FormikProps<Values>) => React.ReactNode) | React.ReactNode;
    errors?: string[];
}

export function KForm<Values>(
    {
        initialValues,
        apiError,
        onSubmit,
        children,
        validationSchema
    }: KFormProps<Values>) {
    let errors: string[] = [];
    if (apiError && apiError.detail['nonFieldErrors']) {
        errors = apiError.detail['nonFieldErrors'];
    }
    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            {(formik) => (
                <Form className="is-invalid" onSubmit={(e) => {
                    e.preventDefault();
                    formik.handleSubmit(e);
                }}>
                    <FormGroup>
                        <input hidden className="is-invalid"/>
                        {errors.map((error, key) => <div key={key} className="invalid-feedback">{error}</div>)}
                    </FormGroup>

                    {typeof children == 'function'
                        ? (children as (props: FormikProps<Values>) => React.ReactNode)(formik)
                        : children}
                </Form>
            )}

        </Formik>

    )
}

export default KForm;
