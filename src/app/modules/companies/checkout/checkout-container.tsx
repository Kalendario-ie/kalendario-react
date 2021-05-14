import React from 'react';
import {FormattedMessage} from 'react-intl';
import {useDispatch, useSelector} from 'react-redux';
import CompanyAvatar from 'src/app/modules/companies/avatar/company-avatar';
import CartRequestSummary from 'src/app/modules/companies/cart/cart-request-summary';
import FlexSpacer from 'src/app/shared/molecules/flex/flex-spacer';
import KalendarioCard from 'src/app/shared/molecules/kalendario-card';
import KalendarioContainer from 'src/app/shared/molecules/kalendario-container';
import {confirmCartRequest, selectCompany, selectCurrentRequest} from 'src/app/store/companies';

interface CheckoutContainerProps {
}

const CheckoutContainer: React.FunctionComponent<CheckoutContainerProps> = () => {
    const company = useSelector(selectCompany);
    const request = useSelector(selectCurrentRequest);
    const dispatch = useDispatch();

    const cashClick = (requestId: number) => {
        dispatch(confirmCartRequest(requestId))
    }

    return (
        <KalendarioContainer>
            {company && request &&
            <KalendarioCard>
                <CompanyAvatar company={company}/>
                <FlexSpacer/>
                <CartRequestSummary request={request} showDelete={false}/>
                <FlexSpacer/>
                <h4><FormattedMessage id="COMPANY.NOTES"/></h4>
                {request.customerNotes}
                <FlexSpacer/>
                <>
                    {company.config.canReceiveCardPayments &&
                    <button
                        className="btn btn-primary mr-2">
                        <FormattedMessage id="COMPANY.PAY-CARD"/>
                    </button>
                    }
                    {company.config.canReceiveUnpaidRequest &&
                    <button className="btn btn-accent" onClick={() => cashClick(request.id)}>
                        <FormattedMessage id="COMPANY.PAY-CASH"/>
                    </button>
                    }
                </>
            </KalendarioCard>
            }
        </KalendarioContainer>
    )
}


export default CheckoutContainer;
