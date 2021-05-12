import {Appointment} from 'src/app/api/appointments';
import {IReadModel} from 'src/app/api/common/models/IReadModel';
import {Company} from 'src/app/api/companies';
import {Employee} from 'src/app/api/employees/models';
import {User} from 'src/app/api/users/models';

export interface RequestItem {
  employee: Employee;
  appointments: Appointment[];
}

export interface RequestModel extends IReadModel {
  id: number;
  owner: Company;
  name: string;
  scheduledDate: string;
  items: RequestItem[];
  itemsCount: number;
  total: number;
  complete: boolean;
  customerNotes: string;
  status: string;
  user: User;
}

