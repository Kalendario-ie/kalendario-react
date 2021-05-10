import React from 'react';
import KFlexRow from '../../shared/molecules/k-flex-row';
import CompanyAvatar from './avatar/company-avatar';
import CompanyServicesList from './company-services-list';
import {CompanyDetails} from '../../api/companies';
import KalendarioContainer from '../../shared/molecules/kalendario-container';

interface CompaniesViewProps {
    company: CompanyDetails;
}

const CompaniesView: React.FunctionComponent<CompaniesViewProps> = (
    {
        company
    }) => {
    return (
        <KalendarioContainer justify="between">
            <CompanyAvatar logo={company.avatar}
                           name={company.name}
                           address={company.address}/>
            <CompanyServicesList/>
        </KalendarioContainer>
    )
}


export default CompaniesView;
