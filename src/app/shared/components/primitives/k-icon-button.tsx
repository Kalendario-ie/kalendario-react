import React from 'react';
import KIcon from 'src/app/shared/components/primitives/k-icon';

interface KIconButtonProps {
    icon: string;
    onClick: () => void;
    color?: string;
}

const KIconButton: React.FunctionComponent<KIconButtonProps> = (
    {
        icon,
        onClick,
        color
    }) => {
    return (
        <div onClick={onClick} className={`c-${color} c-pointer mx-1`}>
            <KIcon icon={icon}/>
        </div>
    )
}


export default KIconButton;
