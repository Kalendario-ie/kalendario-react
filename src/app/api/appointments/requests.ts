import {Moment} from 'moment';

export interface AppointmentQueryParams {
  status?: string;
  from_date?: Moment;
  to_date?: Moment;
  customer?: number;
  employee?: number;
  employees?: number[];
  services?: number[];
  show_all?: boolean;
  delete_only?: boolean;
}

export interface SaveAppointmentRequest {
  id: number;
  start: Moment;
  end: Moment;
  customer: number | null;
  employee: number;
  service: number;
  status: string;
  customerNotes: string;
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
