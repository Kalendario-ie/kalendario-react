import React from 'react';
import {FlexAlign, FlexJustify} from 'src/app/shared/molecules/flex/types';



interface KFlexBoxProps {
    children: React.ReactNode;
    justify?: FlexJustify
    align?: FlexAlign
}


const KFlexColumn: React.FunctionComponent<KFlexBoxProps> = (
    {children,
        justify = 'center',
        align = 'stretch'
    }) => {
    return (
        <div className={`d-flex flex-column align-items-stretch justify-content-${justify}`}>
            {children}
        </div>
    )
}

export default KFlexColumn;
