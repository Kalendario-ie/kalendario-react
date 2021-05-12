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
        justify,
        align,
        className= '',
        wrap = false,
    }) => {
    className += ` d-flex flex-row ${wrap ? 'flex-wrap' : ''}`;
    if (justify) {
        className += `  justify-content-${justify}`;
    }
    if (align)  {
        className += `  align-items-${align}`;
    }
    return (
        <div className={className}>{children}</div>
    )
}


export default KFlexRow;
