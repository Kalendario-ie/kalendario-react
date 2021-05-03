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
