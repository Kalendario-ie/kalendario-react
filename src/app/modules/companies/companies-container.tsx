import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {companyDetailsRequest, selectCompany} from '../../store/companies';
import CompaniesView from './companies-view';

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
        <>
            {company &&
            <CompaniesView company={company}/>
            }
        </>
    )
}

export default CompaniesContainer;
