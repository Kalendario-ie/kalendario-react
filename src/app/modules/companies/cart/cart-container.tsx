import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import CartCompanySummary from 'src/app/modules/companies/cart/cart-company-summary';
import CartRequestSummary from 'src/app/modules/companies/cart/cart-request-summary';
import {companiesUrls} from 'src/app/modules/companies/paths';
import FlexSpacer from 'src/app/shared/molecules/flex/flex-spacer';
import KGrid from 'src/app/shared/molecules/grid/k-grid';
import KalendarioCard from 'src/app/shared/molecules/kalendario-card';
import KalendarioContainer from 'src/app/shared/molecules/kalendario-container';
import {addNotesRequest, deleteAppointmentRequest, selectCompany, selectCurrentRequest} from 'src/app/store/companies';

interface CartContainerProps {
}

const CartContainer: React.FunctionComponent<CartContainerProps> = () => {
    const request = useSelector(selectCurrentRequest)
    const company = useSelector(selectCompany);
    const dispatch = useDispatch();
    const history = useHistory();

    const proceedToCheckout = (notes: string) => {
        if (!company || !request) return;
        dispatch(addNotesRequest({id: request.id, notes}));
        history.push(companiesUrls(company).checkout)
    }

    return (
        <KalendarioContainer>
            {company && request &&
            <KGrid size={6} smSize={12}>
                <KalendarioCard>
                    <CartRequestSummary request={request}
                                        deleteClick={(id => dispatch(deleteAppointmentRequest(id)))}
                    />
                </KalendarioCard>
                <CartCompanySummary company={company}
                                    request={request}
                                    proceedToCheckoutClick={proceedToCheckout}
                />
            </KGrid>
            }
        </KalendarioContainer>
    )
}


export default CartContainer;
