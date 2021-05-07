import KInput, {KInputProps} from './k-input';
import React from 'react';


export interface KPasswordInputProps extends KInputProps {

}

const KPasswordInput: React.FunctionComponent<KPasswordInputProps> = (props) => {
    return (
        <KInput {...props} type="password"/>
    )
}

export default KPasswordInput;
