import React from 'react';
import {useFormikContext} from 'formik';
import KButton from 'src/app/shared/components/primitives/k-button';

export interface SubmitButtonProps {
    text?: React.ReactNode;
    isBlock?: boolean;
}

const SubmitButton: React.FunctionComponent<SubmitButtonProps> = (
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
            disabled={!formik.isValid}
            className={className}
            type="submit">{text}
        </KButton>
    )
}

export default SubmitButton;
