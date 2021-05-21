import React, {useEffect} from 'react';
import {FormattedMessage} from 'react-intl';
import {KFlexColumn, KFlexRow} from 'src/app/shared/molecules/flex';
import KCard from 'src/app/shared/molecules/k-card';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import {serviceActions, serviceSelectors} from 'src/app/store/admin/services';

interface ServicesCardProps {
    serviceIds: number[];
}

const ServicesCard: React.FunctionComponent<ServicesCardProps> = (
    {
        serviceIds
    }) => {
    const dispatch = useAppDispatch();
    const services = useAppSelector(serviceSelectors.selectByIds(serviceIds))

    useEffect(() => {
        dispatch(serviceActions.initializeStore())
    }, []);


    return (
        <KCard
            header={<FormattedMessage id="ADMIN.COMMON.SERVICES"/>}
            maxWidth={500}
            maxHeight={30}
            mhUnit={'vh'}
        >
            <KFlexColumn>
                {services.map(s => <KFlexRow key={s.id}>{s.name}</KFlexRow>)}
            </KFlexColumn>
        </KCard>
    )
}


export default ServicesCard;
