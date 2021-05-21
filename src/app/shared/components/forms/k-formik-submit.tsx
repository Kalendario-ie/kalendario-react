import {useFormikContext} from 'formik';
import React from 'react';
import {KButton} from '../primitives';

export interface KFormikSubmitProps {
    text?: React.ReactNode;
    isBlock?: boolean;
}

export const KFormikSubmit: React.FunctionComponent<KFormikSubmitProps> = (
    {
        text = 'Submit',
        isBlock = false
    }) => {
    const formik = useFormikContext();
    let className = "btn btn-primary";
    if (isBlock) {
        className += ' btn-block';
    }
    return (
        <KButton
            color="primary"
            disabled={!formik.isValid}
            className={className}
            type="submit">{text}
        </KButton>
    )
}

