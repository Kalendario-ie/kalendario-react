import React from 'react';

interface KGridProps {
    size?: number;
    children: React.ReactNode[];
}

const KGrid: React.FunctionComponent<KGridProps> = (
    {
        size = 12,
        children
    }) => {
    return (
        <div className="row">
            {children && children.map((node, k) => <div key={k} className={`col-${size}`}>{node}</div>)}
        </div>
    )
}


export default KGrid;
