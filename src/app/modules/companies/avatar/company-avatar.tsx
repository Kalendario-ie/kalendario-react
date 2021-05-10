import React from 'react';
import AvatarImg from '../../../shared/molecules/avatar-img';
import KFlexBox from '../../../shared/molecules/k-flex-box';

interface CompanyAvatarProps {
    logo: string;
    name: string;
    address: string;
}

const CompanyAvatar: React.FunctionComponent<CompanyAvatarProps> = (
    {logo, name, address}) => {
    return (
        <KFlexBox>
            <AvatarImg src={logo}/>
            <div className="ml-2">
                <h1 className="pb-0 c-pointer">{name}</h1>
                <div className="c-accent">
                    {address}
                </div>
            </div>
        </KFlexBox>
    );
}

export default CompanyAvatar;
