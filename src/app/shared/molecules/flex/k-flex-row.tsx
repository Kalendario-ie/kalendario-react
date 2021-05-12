import React from 'react';
import {FlexAlign, FlexJustify} from 'src/app/shared/molecules/flex/types';

interface KFlexRowProps {
    children: React.ReactNode;
    className?: string;
    justify?: FlexJustify;
    align?: FlexAlign;
    wrap?: boolean;
}

const KFlexRow: React.FunctionComponent<KFlexRowProps> = (
    {
        children,
        justify = 'center',
        align = 'stretch',
        className= '',
        wrap = false,
    }) => {
    className += ` d-flex flex-row ${wrap ? 'flex-wrap' : ''} align-items-${align} justify-content-${justify}`;
    return (
        <div className={className}>{children}</div>
    )
}


export default KFlexRow;
