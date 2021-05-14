import React from 'react';
import {CompanyDetails} from 'src/app/api/companies';
import CompanyAvatar from 'src/app/modules/companies/avatar/company-avatar';
import KInput from 'src/app/shared/components/forms/input/KInput';
import KalendarioCard from 'src/app/shared/molecules/kalendario-card';

interface CartSummaryProps {
    company: CompanyDetails;
}

const CartCompanySummary: React.FunctionComponent<CartSummaryProps> = (
    {
        company,
    }) => {
    return (
        <KalendarioCard>
            <CompanyAvatar company={company}/>

                <p>
                    {company.config.preBookWarn}
                </p>

            <KInput/>
        </KalendarioCard>
    )
}


export default CartCompanySummary;
