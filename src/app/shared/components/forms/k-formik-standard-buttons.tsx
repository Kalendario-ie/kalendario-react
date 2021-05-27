import React from 'react';
import KFormikCancel from 'src/app/shared/components/forms/k-formik-cancel';
import {KFormikSubmit} from 'src/app/shared/components/forms/k-formik-submit';
import {KFlexRow} from 'src/app/shared/components/flex';

interface KFormikStandardButtonsProps {
    onCancel: () => void;
}

const KFormikStandardButtons: React.FunctionComponent<KFormikStandardButtonsProps> = (
    {
        onCancel
    }) => {
    return (
        <KFlexRow align={'baseline'} justify={'end'}>
            <KFormikSubmit className="mr-2"/>
            <KFormikCancel className="m-0" onClick={onCancel}/>
        </KFlexRow>
    )
}


export default KFormikStandardButtons;
