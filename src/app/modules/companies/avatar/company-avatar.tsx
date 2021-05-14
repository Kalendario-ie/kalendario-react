import React from 'react';
import {CompanyDetails} from 'src/app/api/companies';
import AvatarImg from '../../../shared/molecules/avatar-img';
import KFlexRow from 'src/app/shared/molecules/flex/k-flex-row';

interface CompanyAvatarProps {
    company: CompanyDetails;
}

const CompanyAvatar: React.FunctionComponent<CompanyAvatarProps> = (
    {company}) => {
    return (
        <KFlexRow align="center">
            <AvatarImg src={company.avatar}/>
            <div className="ml-2">
                <h1 className="pb-0 c-pointer">{company.name}</h1>
                <div className="c-accent">
                    {company.address}
                </div>
            </div>
        </KFlexRow>
    );
}

export default CompanyAvatar;
