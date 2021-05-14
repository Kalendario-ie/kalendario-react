import React from 'react';
import CompanyAvatar from './avatar/company-avatar';
import CompanyServicesList from 'src/app/modules/companies/company-services/company-services-list';
import {CompanyDetails} from '../../api/companies';
import KalendarioContainer from '../../shared/molecules/kalendario-container';

interface CompaniesViewProps {
    company: CompanyDetails;
    serviceClick: (id: number) => void;
}

const CompaniesView: React.FunctionComponent<CompaniesViewProps> = (
    {
        company,
        serviceClick
    }) => {
    return (
        <KalendarioContainer>
            <CompanyAvatar company={company}
            />
            <CompanyServicesList services={company.services}
                                 categories={company.serviceCategories}
                                 serviceClick={serviceClick}
            />
        </KalendarioContainer>
    )
}


export default CompaniesView;
