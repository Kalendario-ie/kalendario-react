import React from 'react';
import AvatarImg from '../../../shared/molecules/avatar-img';
import KFlexRow from 'src/app/shared/molecules/flex/k-flex-row';

interface CompanyAvatarProps {
    logo: string;
    name: string;
    address: string;
}

const CompanyAvatar: React.FunctionComponent<CompanyAvatarProps> = (
    {logo, name, address}) => {
    return (
        <KFlexRow align="center">
            <AvatarImg src={logo}/>
            <div className="ml-2">
                <h1 className="pb-0 c-pointer">{name}</h1>
                <div className="c-accent">
                    {address}
                </div>
            </div>
        </KFlexRow>
    );
}

export default CompanyAvatar;
