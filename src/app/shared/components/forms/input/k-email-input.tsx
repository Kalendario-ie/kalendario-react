import KInput, {KInputProps} from './k-input';
import React from 'react';


export interface KEmailInputProps extends KInputProps {

}

const KEmailInput: React.FunctionComponent<KEmailInputProps> = (props) => {
    return (
        <KInput {...props} type="email"/>
    )
}

export default KEmailInput;
