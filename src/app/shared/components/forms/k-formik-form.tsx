import {Formik} from 'formik';
import {FormikHelpers, FormikProps} from 'formik/dist/types';
import React from 'react';
import {Form, FormGroup} from 'reactstrap';
import {ApiValidationError} from 'src/app/api/common/api-errors';

export interface KFormikFormProps<Values> {
    initialValues: Values;
    apiError: ApiValidationError | null;
    validationSchema?: any | (() => any);
    onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void;
    children: ((props: FormikProps<Values>) => React.ReactNode) | React.ReactNode;
    errors?: string[];
}

export function KFormikForm<Values>(
    {
        initialValues,
        apiError,
        onSubmit,
        children,
        validationSchema
    }: KFormikFormProps<Values>) {
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

