import React from 'react';
import KFlexColumn, {FlexJustify} from './k-flex-column';

export interface KalendarioContainerProps {
    children: React.ReactNode;
    justify?: FlexJustify
}

const KalendarioContainer: React.FunctionComponent<KalendarioContainerProps> = (
    {children,
    justify= 'center'
    }) => {
    return (
        <div className={`container mt-5 d-flex justify-content-${justify}`}>
            <KFlexColumn>
                {children}
            </KFlexColumn>
        </div>
    )
}

export default KalendarioContainer;
