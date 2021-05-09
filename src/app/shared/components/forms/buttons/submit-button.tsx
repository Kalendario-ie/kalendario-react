import React from 'react';
import {Button} from 'reactstrap';
import {useFormikContext} from 'formik';

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
        <Button
            disabled={!formik.isValid}
            className={className}
            type="submit">{text}
        </Button>
    )
}

export default SubmitButton;
