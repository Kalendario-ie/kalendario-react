import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CartCompanySummary from 'src/app/modules/companies/cart/cart-company-summary';
import CartRequestSummary from 'src/app/modules/companies/cart/cart-request-summary';
import KGrid from 'src/app/shared/molecules/grid/k-grid';
import KalendarioContainer from 'src/app/shared/molecules/kalendario-container';
import {deleteAppointmentRequest, selectCompany, selectCurrentRequest} from 'src/app/store/companies';

interface CartContainerProps {
}

const CartContainer: React.FunctionComponent<CartContainerProps> = () => {
    const request = useSelector(selectCurrentRequest)
    const company = useSelector(selectCompany);
    const dispatch = useDispatch();

    return (
        <KalendarioContainer>
            {company &&
            <KGrid size={6} smSize={12}>
                <CartRequestSummary request={request}
                                    deleteClick={(id => dispatch(deleteAppointmentRequest(id)))}
                />
                <CartCompanySummary company={company}
                />
            </KGrid>
            }
        </KalendarioContainer>
    )
}


export default CartContainer;
