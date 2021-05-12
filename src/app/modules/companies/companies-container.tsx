import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import SlotsForServiceModal from 'src/app/modules/companies/company-services/slots-for-service-modal';
import {
    companyDetailsRequest,
    selectCompany,
    selectService,
    setSelectedServiceId,
} from '../../store/companies';
import CompaniesView from './companies-view';

interface CompaniesContainerProps {
}

const CompaniesContainer: React.FunctionComponent<CompaniesContainerProps> = () => {
    const {name} = useParams<{ name: string }>();
    const dispatch = useDispatch();
    const company = useSelector(selectCompany);
    const service = useSelector(selectService);

    const serviceClick = (id: number | null) => {
        dispatch(setSelectedServiceId(id));
    }


    useEffect(() => {
        dispatch(companyDetailsRequest(name))
    }, [dispatch, name])
    return (
        <>
            {company &&
            <CompaniesView company={company} serviceClick={serviceClick}/>
            }
            <SlotsForServiceModal service={service} onCancel={() => serviceClick(null)}/>
        </>
    )
}

export default CompaniesContainer;
