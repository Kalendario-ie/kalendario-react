import React, {useEffect} from 'react';
import {FormattedMessage} from 'react-intl';
import KCard from 'src/app/shared/components/k-card';
import KTreeView from 'src/app/shared/components/k-tree-view';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import {serviceCategoryActions} from 'src/app/store/admin/serviceCategories';
import {serviceActions, serviceSelectors} from 'src/app/store/admin/services';

interface ServicesCardProps {
    serviceIds: number[];
}

const ServicesCard: React.FunctionComponent<ServicesCardProps> = (
    {
        serviceIds
    }) => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state: any) =>
        serviceSelectors.selectServicesWithCategoriesByIds(state, serviceIds))

    useEffect(() => {
        dispatch(serviceActions.initializeStore())
        dispatch(serviceCategoryActions.initializeStore())
    }, []);


    return (
        <KCard
            header={<FormattedMessage id="ADMIN.COMMON.SERVICES"/>}
            maxWidth={500}
            maxHeight={30}
            mhUnit={'vh'}
            hasShadow={false}
        >
            <KTreeView
                items={categories}
                renderComponent={(props => <>{props.name}</>)}
            />
        </KCard>
    )
}


export default ServicesCard;
