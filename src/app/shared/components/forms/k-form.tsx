import React from 'react';
import {FormikHelpers, FormikProps} from 'formik/dist/types';
import {useFormik} from 'formik';

export interface KFormProps<Values> {
    initialValues: Values,
    onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void;
    children: ((props: FormikProps<Values>) => React.ReactNode) | React.ReactNode;
}

export function KForm<Values>({onSubmit, children, initialValues}: KFormProps<Values>) {
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit
    });
    return (
        <form onSubmit={(e) => {e.preventDefault(); formik.handleSubmit(e);}}>
            {typeof children == 'function'
                ? (children as (props: FormikProps<Values>) => React.ReactNode)(formik)
                : children}
        </form>
    )
}

export default KForm;
