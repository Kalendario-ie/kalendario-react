import React from 'react';

interface KIconProps {
    icon: string;
    margin?: number;
    onClick?: () => void;
}

const KIcon: React.FunctionComponent<KIconProps> = (
    {
        icon,
        margin = 1,
        onClick,
    }) => {
    const className = `fa fa-${icon} mx-${margin}${!onClick ? '' : ' c-pointer'}`;
    return (
        <i className={className} onClick={onClick}/>
    )
}


export default KIcon;
