import {
    Appointment,
    AppointmentHistory,
    CustomerAppointment,
    CustomerRequestAppointment,
    EmployeeEvent
} from 'src/app/api/appointments/models';
import {UpsertAppointmentRequest} from 'src/app/api/appointments/requests';
import {customerParser} from 'src/app/api/customers';
import {employeeParser} from 'src/app/api/employees';
import {serviceParser} from 'src/app/api/services';
import {userParser} from 'src/app/api/users';

export function appointmentParser(data: any): Appointment {
    return data.customer ? customerAppointmentParser(data) : employeeEventParser(data);
}

export function customerRequestAppointmentParser(data: any): CustomerRequestAppointment {
    const name = data.customer ?
        data.status !== 'P' ? data.customer.firstName + ' - ' + data.service.name : 'pending request'
        : 'lock time: ' + data.internalNotes;

    return {
        ...customerAppointmentParser(data),
        name,
        customerNotes: data.customerNotes,
        companyName: data.owner?.name ? data.owner.name : '',
        request: data.request,
        status: data.status ? data.status : 'P',
    }
}

function customerAppointmentParser(data: any): CustomerAppointment {
    return {
        ...employeeEventParser(data),
        customer: customerParser(data.customer),
        service: serviceParser(data.service),
    }
}

function employeeEventParser(data: any): EmployeeEvent {
    return {
        ...data,
        name: '',
        employee: employeeParser(data.employee),
    }
}

export function appointmentHistoryParser(data: any): AppointmentHistory {
    return {
        ...appointmentParser(data),
        historyType: data.historyType,
        historyDate: data.historyDate,
        historyUser: data.historyUser ? userParser(data.historyUser) : null,
    }

}

export function upsertAppointmentRequestParser(appointment: Appointment | null): UpsertAppointmentRequest {
    return appointment ? {
        start: appointment.start,
        end: appointment.end,
        customer: 'customer' in appointment ? appointment.customer?.id : '',
        employee: appointment.employee.id,
        internalNotes: appointment.internalNotes,
        ignoreAvailability: false,
        service: 'service' in appointment ? appointment.service?.id : '',
        status: 'status' in appointment ? appointment.status : ''
    } : {
        start: '',
        end: '',
        customer: '',
        employee: '',
        ignoreAvailability: false,
        internalNotes: '',
        service: '',
        status: ''
    }
}
