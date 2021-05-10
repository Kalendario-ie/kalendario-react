import React from 'react';


export type FlexJustify = 'center' | 'between';

interface KFlexBoxProps {
    children: React.ReactNode;
    justify?: FlexJustify
}


const KFlexColumn: React.FunctionComponent<KFlexBoxProps> = (
    {children,
        justify = 'center'
    }) => {
    return (
        <div className={`d-flex flex-column justify-content-${justify}`}>
            {children}
        </div>
    )
}

export default KFlexColumn;
