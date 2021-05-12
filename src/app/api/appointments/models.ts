import {Moment} from 'moment';
import {HistoryType} from 'src/app/api/common/HistoryType';
import {IReadModel} from 'src/app/api/common/models/IReadModel';
import {Employee} from 'src/app/api/employees/models';
import {Service} from 'src/app/api/services';
import {User} from 'src/app/api/users/models';

export interface Appointment extends IReadModel {
  request: number;
  companyName;
  customer: Customer;
  employee: Employee;
  service: Service;
  lockEmployee: boolean;
  status;
  start: Moment;
  end: Moment;
  customerNotes;
  internalNotes;
  deleted: Moment | null;
}


export interface AppointmentHistory extends Appointment {
  historyType: HistoryType;
  historyDate: Moment | null;
  historyUser: User;
}

