import React from 'react';

interface KFillerProps {
    width?: number;
    height?: number;
    className?: string;
}

const KFiller: React.FunctionComponent<KFillerProps> = (
    {
        width,
        height,
        ...rest
    }) => {
    const style: React.CSSProperties = {
        height: height ? `${height}rem` : '100%',
        width: width ? `${width}rem` : '100%',
        boxSizing: 'content-box'
    }
    return (
        <div style={style} {...rest}/>
    )
}


export default KFiller;
