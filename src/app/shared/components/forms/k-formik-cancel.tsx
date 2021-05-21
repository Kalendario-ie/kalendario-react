import React from 'react';
import {FormattedMessage} from 'react-intl';
import {KButton} from 'src/app/shared/components/primitives';

interface KFormikCancelProps {
    onClick: () => void;
}

const KFormikCancel: React.FunctionComponent<KFormikCancelProps> = (
    {
        onClick
    }) => {
    return (
        <KButton onClick={onClick}
            color="danger"
            type="button">
            <FormattedMessage id="COMMON.FORM.CANCEL"/>
        </KButton>
    )
}


export default KFormikCancel;
