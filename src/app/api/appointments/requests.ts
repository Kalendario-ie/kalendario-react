import {Moment} from 'moment';

export interface AppointmentQueryParams {
  status?: string;
  from_date?: string;
  to_date?: string;
  customer?: number;
  employee?: number;
  employees?: number[];
  services?: number[];
  show_all?: boolean;
  delete_only?: boolean;
}

export interface UpsertAppointmentRequest {
  start: string;
  end: string;
  customer: number | '';
  employee: number | '';
  service: number | '';
  status: string;
  internalNotes: string;
  ignoreAvailability: boolean;
}

export interface AdminAppointmentQueryParams {
  fromDate?: Moment;
  toDate?: Moment;
  customer?: number;
  employee?: number;
  employees?: number[];
  services?: number[];
}
