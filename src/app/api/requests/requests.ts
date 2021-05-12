import {Moment} from 'moment';

export interface CreateAppointmentRequest {
    start: Moment;
    employee?: number;
    service: number;
}
