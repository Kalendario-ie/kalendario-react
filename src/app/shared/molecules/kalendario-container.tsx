import React from 'react';

export interface KalendarioContainerProps {
    children: React.ReactNode;
}

const KalendarioContainer: React.FunctionComponent<KalendarioContainerProps> = ({children}) => {
    return (
        <div className="container mt-5 d-flex justify-content-center">
            {children}
        </div>
    )
}

export default KalendarioContainer;
