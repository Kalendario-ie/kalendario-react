import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Button} from 'reactstrap';
import {RequestModel} from 'src/app/api/requests';
import AvatarImg from 'src/app/shared/molecules/avatar-img';
import KalendarioCard from 'src/app/shared/molecules/kalendario-card';
import KFlexRow from 'src/app/shared/molecules/flex/k-flex-row';
import KFlexColumn from 'src/app/shared/molecules/flex/k-flex-column';

interface CartRequestSummaryProps {
    request: RequestModel | null;
    deleteClick: (id: number) => void;
}

const CartRequestSummary: React.FunctionComponent<CartRequestSummaryProps> = (
    {
        request,
        deleteClick
    }) => {
    const isEmpty = !request || (request && request.itemsCount === 0);
    return (
        <KalendarioCard>
            <KFlexColumn>
                {request && request.items.map((requestItem, key) => (
                        <KFlexRow align="center" key={key}>
                            <AvatarImg className="mr-4" src={requestItem.employee.photoUrl}/>
                            <KFlexColumn className="w-100">
                                <h4 className="border-bottom border-dark">{requestItem.employee.name}</h4>
                                {requestItem.appointments.map((appointment, key) => (
                                        <KFlexRow key={key} justify={'between'}>
                                            <KFlexColumn>
                                                <h6>{appointment.service.name}</h6>
                                                {appointment.start.format('DD/MM/YYYY - HH:mm')}
                                                (duration: {appointment.service.duration.minute})
                                            </KFlexColumn>
                                            <KFlexColumn className="text-right">
                                                <h6 className="c-primary">{appointment.service.price}</h6>
                                                <Button size="sm"
                                                        color="danger"
                                                        onClick={() => deleteClick(appointment.id)}
                                                >
                                                    <i className="fa fa-trash"/>
                                                </Button>
                                            </KFlexColumn>
                                        </KFlexRow>
                                    )
                                )}
                            </KFlexColumn>
                        </KFlexRow>
                    )
                )}
                {isEmpty && <FormattedMessage id="COMPANY.EMPTY-CART"/>}
            </KFlexColumn>
        </KalendarioCard>
    )
}

export default CartRequestSummary;

