import React from 'react';
import KFlexColumn from 'src/app/shared/molecules/flex/k-flex-column';

export interface KalendarioContainerProps {
    children: React.ReactNode;
}

const KalendarioContainer: React.FunctionComponent<KalendarioContainerProps> = (
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

export default KalendarioContainer;
