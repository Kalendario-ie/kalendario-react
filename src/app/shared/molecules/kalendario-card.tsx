import React from 'react';

export interface KalendarioCardProps {
    header?: React.ReactNode;
    children?: React.ReactChild | React.ReactChild[],
    maxWidth?: number | undefined;
    hasShadow?: boolean;
}

const KalendarioCard: React.FunctionComponent<KalendarioCardProps> = (
    {
        header,
        children,
        maxWidth,
        hasShadow = true,
    }) => {
    let className = "card-container"
    if (hasShadow) {
        className += ' company-shadow-1';
    }
    let style = {};
    if (maxWidth) {
        style = {maxWidth: `${maxWidth}px`};
    }

    return (
        <div className={className} style={style}>
            <h5 className="card-title mb-3 text-center">{header}</h5>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

export default KalendarioCard;
