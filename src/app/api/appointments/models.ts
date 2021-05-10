export {}
// import {Employee, IEmployee} from './IEmployee';
// import {Service} from './Service';
// import * as moment from 'moment';
// import {Moment} from 'moment';
// import {Injectable} from '@angular/core';
// import {Adapter} from '../adapter';
// import {IReadModel} from './IReadModel';
// import {PermissionModels} from '@api/permissions';
// import {Customer, ICustomer} from '@api/models/ICustomer';
//
// export class Appointment implements IReadModel {
//   static modelType = PermissionModels.appointment;
//
//   id: number;
//   request: number;
//   name: string;
//   companyName: string;
//   customer: ICustomer;
//   employee: IEmployee;
//   service: Service;
//   lockEmployee: boolean;
//   status;
//   start: Moment;
//   end: Moment;
//   customerNotes;
//   internalNotes;
//   deleted: Moment | null;
//
//   static fromJS(data?: any): IAppointment {
//     data = typeof data === 'object' ? data : {};
//     const result = new Appointment();
//     result.init(data);
//     return result;
//   }
//
//   init(data: any) {
//     this.id = data.id ? data.id : 0;
//     this.request = data.request;
//     this.companyName = data.owner?.name ? data.owner.name : '';
//     this.customer = data?.customer ? Customer.fromJS(data?.customer) : null;
//     this.employee = Employee.fromJs(data?.employee);
//     this.lockEmployee = data.lockEmployee;
//     this.service = Service.fromJs(data?.service);
//     this.status = data.status ? data.status : 'P';
//     this.start = data.start ? moment.utc(data.start) : moment.utc();
//     this.end = data.end ? moment.utc(data.end) : moment.utc();
//     this.customerNotes = data.customerNotes ? data.customerNotes : '';
//     this.internalNotes = data.internalNotes ? data.internalNotes : '';
//     this.deleted = data.deleted ? moment.utc(data.deleted) : null;
//
//     if (this.customer) {
//       this.name = this.status !== 'P' ? this.customer.firstName + ' - ' + this.service.name : 'pending request';
//     } else {
//       this.name = 'lock time: ' + this.internalNotes;
//     }
//   }
// }
//
// export interface IAppointment extends IReadModel {
//   request: number;
//   companyName;
//   customer: ICustomer;
//   employee: IEmployee;
//   service: Service;
//   lockEmployee: boolean;
//   status;
//   start: Moment;
//   end: Moment;
//   customerNotes;
//   internalNotes;
//   deleted: Moment | null;
// }
//
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AppointmentAdapter implements Adapter<IAppointment> {
//   adapt(item: any): IAppointment {
//     return Appointment.fromJS(item);
//   }
// }
//
// export interface IAppointmentWriteModel {
//   id: number;
//   start: Moment;
//   end: Moment;
//   customer: number | null;
//   employee: number;
//   service: number;
//   status: string;
//   customerNotes: string;
//   internalNotes: string;
//   ignoreAvailability: boolean;
// }
// import * as moment from 'moment';
// import {Moment} from 'moment';
// import {Injectable} from '@angular/core';
// import {Adapter} from '../adapter';
// import {PermissionModels} from '@api/permissions';
// import {Appointment, IAppointment} from '@api/models/Appointment';
// import {IUser, User} from './IUser';
// import {HistoryType} from '@api/models/HistoryType';
//
// export class AppointmentHistory extends Appointment implements IAppointmentHistory {
//   static modelType = PermissionModels.appointment;
//
//   historyType: HistoryType;
//   historyDate: Moment;
//   historyUser: IUser;
//
//   static fromJS(data?: any): IAppointmentHistory {
//     data = typeof data === 'object' ? data : {};
//     const result = new AppointmentHistory();
//     result.init(data);
//     return result;
//   }
//
//   init(data: any) {
//     super.init(data);
//     this.historyType = data.historyType;
//     this.historyDate = data.historyDate ? moment.utc(data.historyDate) : null;
//     this.historyUser = data.historyUser ? User.fromJs(data.historyUser) : null;
//   }
// }
//
// export interface IAppointmentHistory extends IAppointment {
//   historyType: HistoryType;
//   historyDate: Moment;
//   historyUser: IUser;
// }
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AppointmentHistoryAdapter implements Adapter<IAppointmentHistory> {
//   adapt(item: any): IAppointmentHistory {
//     return AppointmentHistory.fromJS(item);
//   }
// }
