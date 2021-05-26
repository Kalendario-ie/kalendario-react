import {
    Appointment,
    AppointmentHistory,
    CustomerAppointment,
    CustomerRequestAppointment,
    EmployeeEvent,
    EventType
} from 'src/app/api/appointments/models';
import {UpsertCustomerAppointmentRequest, UpsertEmployeeEventRequest} from 'src/app/api/appointments/requests';
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
        type: EventType.CustomerRequestAppointment,
        customerNotes: data.customerNotes,
        companyName: data.owner?.name ? data.owner.name : '',
        request: data.request,
        status: data.status ? data.status : 'P',
    }
}

function customerAppointmentParser(data: any): CustomerAppointment {
    return {
        ...employeeEventParser(data),
        type: EventType.CustomerAppointment,
        customer: customerParser(data.customer),
        service: serviceParser(data.service),
    }
}

function employeeEventParser(data: any): EmployeeEvent {
    return {
        ...data,
        type: EventType.EmployeeEvent,
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

export function upsertCustomerAppointmentRequestParser(appointment: Appointment | null): UpsertCustomerAppointmentRequest {
    if (!appointment || appointment.type === EventType.EmployeeEvent) {
        return {
            start: '',
            end: '',
            customer: 0,
            employee: 0,
            service: 0,
            ignoreAvailability: false,
            internalNotes: '',
        }
    }

    const customerAppointment = appointment as CustomerAppointment;
    return {
        start: appointment.start,
        end: appointment.end,
        employee: appointment.employee.id,
        internalNotes: appointment.internalNotes,
        ignoreAvailability: false,
        customer: customerAppointment.customer.id,
        service: customerAppointment.service.id,
    }
}

export function upsertEmployeeEventRequestParser(appointment: Appointment | null): UpsertEmployeeEventRequest {
    return appointment ? {
        start: appointment.start,
        end: appointment.end,
        employee: appointment.employee.id,
        internalNotes: appointment.internalNotes,
        ignoreAvailability: false,
    } : {
        start: '',
        end: '',
        employee: 0,
        ignoreAvailability: false,
        internalNotes: '',
    }
}
