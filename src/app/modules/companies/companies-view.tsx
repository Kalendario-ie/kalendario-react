import React from 'react';
import CompanyAvatar from './avatar/company-avatar';
import CompanyServicesList from 'src/app/modules/companies/company-services/company-services-list';
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
        <KalendarioContainer>
            <CompanyAvatar logo={company.avatar}
                           name={company.name}
                           address={company.address}/>
            <CompanyServicesList services={company.services}
                                 categories={company.serviceCategories}
            serviceClick={(id) => {console.log(id)}}/>
        </KalendarioContainer>
    )
}


export default CompaniesView;
