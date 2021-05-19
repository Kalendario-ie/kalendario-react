import React from 'react';
import {KFlexColumn} from './flex';

export interface KalendarioContainerProps {
    children: React.ReactNode;
}

const KPageContainer: React.FunctionComponent<KalendarioContainerProps> = (
    {
        children,
    }) => {
    return (
        <div className="container mt-5">
            <KFlexColumn>
                {children}
            </KFlexColumn>
        </div>
    )
}

export default KPageContainer;
