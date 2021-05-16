import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CreateAppointmentRequest} from 'src/app/api/companies';
import {useKHistory, useQueryParams} from 'src/app/shared/util/router-extensions';
import {bookSlotRequest, selectCompany} from 'src/app/store/companies';

interface BookContainerProps {
}

const BookContainer: React.FunctionComponent<BookContainerProps> = () => {
    const {service, start, employee} = useQueryParams();
    const company = useSelector(selectCompany);
    const history = useKHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        if (company) {
            const request: CreateAppointmentRequest = {start, service: +service};
            if (employee) request.employee = +employee;
            dispatch(bookSlotRequest(request))
            history.push(`/c/${company?.name}/cart`);
        }
    }, [company, dispatch, employee, history, service, start]);
    return (
        <div>
        </div>
    )
}


export default BookContainer;
