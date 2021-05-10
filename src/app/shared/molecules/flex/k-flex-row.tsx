import React from 'react';

interface KFlexRowProps {
    children: React.ReactNode;
}

const KFlexRow: React.FunctionComponent<KFlexRowProps> = (
    {
        children
    }) => {
    return (
        <div className="d-flex">{children}</div>
    )
}


export default KFlexRow;
