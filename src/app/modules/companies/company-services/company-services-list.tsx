import React from 'react';
import CompanyServicesItem from 'src/app/modules/companies/company-services/company-services-item';
import KFlexRow from 'src/app/shared/molecules/flex/k-flex-row';
import KFlexRowItem from 'src/app/shared/molecules/flex/k-flex-row-item';
import KGrid from 'src/app/shared/molecules/k-grid';
import KalendarioCard from 'src/app/shared/molecules/kalendario-card';
import {Service, ServiceCategory} from 'src/app/api/services/models';

interface CompanyServicesListProps {
    services: Service[];
    categories: ServiceCategory[];
    serviceClick: (id: number) => void;
}

const CompanyServicesList: React.FunctionComponent<CompanyServicesListProps> = (
    {
        services,
        categories,
        serviceClick
    }) => {
    return (
        <KalendarioCard>
            <KFlexRow>
                {categories.length > 1 &&
                <KFlexRowItem>
                    {categories.map((c, k) => <div key={k}>{c.name}</div>)}
                </KFlexRowItem>
                }
                <KFlexRowItem grow={4}>
                    <KGrid size={6}>
                        {services.map((s, k) => <CompanyServicesItem key={k}
                                                                     onClick={serviceClick}
                                                                     service={s}/>)}
                    </KGrid>
                </KFlexRowItem>
            </KFlexRow>
        </KalendarioCard>
    )
}

export default CompanyServicesList;
