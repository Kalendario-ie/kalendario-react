import React from 'react';

interface FlexSpacerProps {
    size?: number;
}

const FlexSpacer: React.FunctionComponent<FlexSpacerProps> = (
    {
        children,
        size= 2
    }) => {
    const style = {margin: `${size}rem`}
    return (
        <div style={style}>
        </div>
    )
}


export default FlexSpacer;
