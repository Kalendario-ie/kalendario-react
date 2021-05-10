import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {companyDetailsRequest, selectCompany} from '../../store/companies';
import CompanyAvatar from './avatar/company-avatar';
import KalendarioContainer from '../../shared/molecules/kalendario-container';

interface CompaniesContainerProps {
}

const CompaniesContainer: React.FunctionComponent<CompaniesContainerProps> = () => {
    const {name} = useParams<{ name: string }>();
    const dispatch = useDispatch();
    const company = useSelector(selectCompany);

    useEffect(() => {
        dispatch(companyDetailsRequest(name))
    }, [dispatch, name])
    return (
        <KalendarioContainer justify="between">
            {company &&
            <CompanyAvatar logo={company.avatar}
                           name={company.name}
                           address={company.address}/>
            }
        </KalendarioContainer>

    )
}

export default CompaniesContainer;
