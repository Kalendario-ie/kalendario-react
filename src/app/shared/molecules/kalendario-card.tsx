import React from 'react';

interface KalendarioCardProps {
    header?: React.ReactNode;
    children?: React.ReactChild | React.ReactChild[]
}

const KalendarioCard: React.FunctionComponent<KalendarioCardProps> = ({
    header,
    children
}) => {
    return (
        <div className="card-container company-shadow-1">
            <h5 className="card-title mb-3 text-center">{header}</h5>
            {children}
        </div>
    )
}

export default KalendarioCard;
