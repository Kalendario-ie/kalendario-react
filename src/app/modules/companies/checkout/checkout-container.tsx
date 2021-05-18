import React, {useState} from 'react';
import {FormattedMessage} from 'react-intl';
import {useDispatch, useSelector} from 'react-redux';
import {billingClient} from 'src/app/api/billing';
import {RequestModel} from 'src/app/api/requests';
import CompanyAvatar from 'src/app/modules/companies/avatar/company-avatar';
import CartRequestSummary from 'src/app/modules/companies/cart/cart-request-summary';
import StripeContainer from 'src/app/modules/billing/stripe-container';
import {USER_ROUTES} from 'src/app/modules/users/urls';
import FlexSpacer from 'src/app/shared/molecules/flex/flex-spacer';
import KalendarioCard from 'src/app/shared/molecules/kalendario-card';
import KalendarioContainer from 'src/app/shared/molecules/kalendario-container';
import {useKHistory} from 'src/app/shared/util/router-extensions';
import {confirmCartRequest, selectCompany, selectCurrentRequest} from 'src/app/store/companies';

interface CheckoutContainerProps {
}

const CheckoutContainer: React.FunctionComponent<CheckoutContainerProps> = () => {
    const company = useSelector(selectCompany);
    const request = useSelector(selectCurrentRequest);
    const [stripePaymentOpen, setStripePaymentOpen] = useState(false);
    const [stripeSecret, setStripeSecret] = useState<string>('');
    const dispatch = useDispatch();
    const history = useKHistory();

    const confirmRequest = (request: RequestModel) => () => {
        dispatch(confirmCartRequest(request.id));
        history.push(USER_ROUTES.BOOKING(request.scheduledDate));
    }

    const toggleStripePaymentOpen = (id: number) => () => {
        billingClient.payment(id)
            .then(res => {
                setStripeSecret(res.clientSecret);
                setStripePaymentOpen(!stripePaymentOpen)
            })
        ;
    }

    return (
        <KalendarioContainer>
            {company && request &&
            <>
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
                        <button onClick={toggleStripePaymentOpen(request.id)}
                            className="btn btn-primary mr-2">
                            <FormattedMessage id="COMPANY.PAY-CARD"/>
                        </button>
                        }
                        {company.config.canReceiveUnpaidRequest &&
                        <button className="btn btn-accent"
                                onClick={confirmRequest(request)}>
                            <FormattedMessage id="COMPANY.PAY-CASH"/>
                        </button>
                        }
                    </>
                </KalendarioCard>
                <StripeContainer
                    price={request.total}
                    stripeSecret={stripeSecret}
                    isOpen={stripePaymentOpen}
                    onSuccess={confirmRequest(request)}
                    cancelClick={() => setStripePaymentOpen(false)}
                />
            </>

            }
        </KalendarioContainer>
    )
}


export default CheckoutContainer;
