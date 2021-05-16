import React from 'react';

interface KIconProps {
    icon: string;
    margin?: number;
}

const KIcon: React.FunctionComponent<KIconProps> = (
    {
        icon,
        margin = 1
    }) => {
    const className = `fa fa-${icon} mx-${margin}`;
    return (
        <i className={className} />
    )
}


export default KIcon;
