import {Moment} from 'moment';
import {HistoryType} from 'src/app/api/common/HistoryType';
import {IReadModel} from 'src/app/api/common/models';
import {Company} from 'src/app/api/companies';
import {Customer} from 'src/app/api/customers';
import {Employee} from 'src/app/api/employees/models';
import {Service} from 'src/app/api/services';
import {User} from 'src/app/api/users/models';


export type Appointment = CustomerRequestAppointment | EmployeeEvent | CustomerEvent;

export interface CustomerEvent extends CustomerRequestAppointment {
    owner: Company;
}

export interface CustomerRequestAppointment extends CustomerAppointment {
    request: number;
    status: string;
    customerNotes: string;
    companyName: string;
    owner: number | Company;
}

export interface CustomerAppointment extends EmployeeEvent {
    customer: Customer;
    service: Service;
}

export interface EmployeeEvent extends IReadModel {
    start: string;
    end: string;
    employee: Employee;
    owner: number | Company;
    internalNotes: string;
    deleted: string | null;
}

export interface History {
    historyType: HistoryType;
    historyDate: Moment | null;
    historyUser: User | null;
}

export type AppointmentHistory = Appointment & History;

