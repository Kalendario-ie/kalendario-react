import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {companyDetailsRequest, selectCompany} from '../../store/companies';

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
        <div>{company?.name}</div>
    )
}

export default CompaniesContainer;
