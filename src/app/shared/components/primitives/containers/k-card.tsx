import React from 'react';

export interface KalendarioCardProps {
    header?: React.ReactNode;
    className?: string;
    maxWidth?: number | undefined;
    mwUnit?: string | undefined;
    maxHeight?: number | undefined;
    mhUnit?: string | undefined;
    hasShadow?: boolean;
    bodiless?: boolean;
}

export const KCard: React.FunctionComponent<KalendarioCardProps> = (
    {
        header,
        children,
        className = '',
        maxWidth,
        mwUnit = 'px',
        maxHeight,
        mhUnit = 'px',
        hasShadow = true,
        bodiless = false,
    }) => {
    className += " card"
    if (hasShadow) {
        className += ' company-shadow-1';
    }
    let style = {};
    if (maxWidth) {
        style = {maxWidth: `${maxWidth}${mwUnit}`};
    }
    let bodyStyle = {}
    if (maxHeight) {
        bodyStyle = {
            maxHeight: `${maxHeight}${mhUnit}`,
            overflow: 'scroll'
        }
    }

    return (
        <div className={className} style={style}>
            <h5 className="card-title mb-3 text-center">{header}</h5>
            <div className={bodiless ? '' : 'card-body'} style={bodyStyle}>
                {children}
            </div>
        </div>
    )
}
