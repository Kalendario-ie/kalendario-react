import moment from 'moment';
import {Appointment, AppointmentHistory} from 'src/app/api/appointments/models';
import {companyParser} from 'src/app/api/companies';
import {customerParser} from 'src/app/api/customers';
import {employeeParser} from 'src/app/api/employees';
import {serviceParser} from 'src/app/api/services';
import {userParser} from 'src/app/api/users';

export function appointmentParser(data: any): Appointment {
    const name = data.customer ?
        data.status !== 'P' ? data.customer.firstName + ' - ' + data.service.name : 'pending request'
        : 'lock time: ' + data.internalNotes;

    return {
        ...data,
        name,
        companyName: data.owner?.name ? data.owner.name : '',
        customer: data?.customer ? customerParser(data?.customer) : null,
        employee: employeeParser(data?.employee),
        service: serviceParser(data?.service),
        owner: companyParser(data?.owner),
        status: data.status ? data.status : 'P',
    }
}

export function appointmentHistoryParser(data: any): AppointmentHistory {
    return {
        ...appointmentParser(data),
        historyType: data.historyType,
        historyDate: data.historyDate ? moment.utc(data.historyDate) : null,
        historyUser: data.historyUser ? userParser(data.historyUser) : null,
    }

}
