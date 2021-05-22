import React from 'react';
import KFormikCancel from 'src/app/shared/components/forms/k-formik-cancel';
import {KFormikForm} from 'src/app/shared/components/forms/k-formik-form';
import {KFormikSubmit} from 'src/app/shared/components/forms/k-formik-submit';

interface KFormikStandardButtonsProps {
    onCancel: () => void;
}

const KFormikStandardButtons: React.FunctionComponent<KFormikStandardButtonsProps> = (
    {
        onCancel
    }) => {
    return (
        <>
            <KFormikSubmit className="mr-2"/>
            <KFormikCancel onClick={onCancel}/>
        </>
    )
}


export default KFormikStandardButtons;
