import React from 'react';

interface KIconProps {
    icon: string;
    color?: string;
    margin?: number;
    onClick?: () => void;
}

const KIcon: React.FunctionComponent<KIconProps> = (
    {
        icon,
        color,
        margin = 1,
        onClick,
    }) => {
    const className = `fa fa-${icon} c-${color} mx-${margin}${!onClick ? '' : ' c-pointer'}`;
    return (
        <i className={className} onClick={onClick}/>
    )
}


export default KIcon;
