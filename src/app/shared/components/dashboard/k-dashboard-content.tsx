import React from 'react';

interface KDashboardContentProps {
    children: React.ReactNode;
}

const KDashboardContent: React.FunctionComponent<KDashboardContentProps> = (
    {
        children
    }) => {
    return (
        <div className="dashboard-content">
            <div className="container-fluid">
                {children}
            </div>
        </div>
    )
}


export default KDashboardContent;
