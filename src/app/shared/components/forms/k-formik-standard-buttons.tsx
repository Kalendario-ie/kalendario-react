import React from 'react';
import KFormikCancel from 'src/app/shared/components/forms/k-formik-cancel';
import {KFormikSubmit} from 'src/app/shared/components/forms/k-formik-submit';
import {KFlexRow} from 'src/app/shared/molecules/flex';

interface KFormikStandardButtonsProps {
    onCancel: () => void;
}

const KFormikStandardButtons: React.FunctionComponent<KFormikStandardButtonsProps> = (
    {
        onCancel
    }) => {
    return (
        <KFlexRow>
            <KFormikSubmit className="mr-2 btn-block"/>
            <KFormikCancel className="btn-block m-0" onClick={onCancel}/>
        </KFlexRow>
    )
}


export default KFormikStandardButtons;
