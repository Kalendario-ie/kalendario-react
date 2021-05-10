import React from 'react';

export interface KalendarioContainerProps {
    children: React.ReactNode;
    justify?: 'center' | 'between'
}

const KalendarioContainer: React.FunctionComponent<KalendarioContainerProps> = (
    {children,
    justify= 'center'
    }) => {
    return (
        <div className={`container mt-5 d-flex justify-content-${justify}`}>
            {children}
        </div>
    )
}

export default KalendarioContainer;
