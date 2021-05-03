export {}
// import {Injectable} from '@angular/core';
// import {Adapter} from '../adapter';
// import {IReadModel} from './IReadModel';
// import {Appointment, IAppointment} from './Appointment';
// import {Moment} from 'moment';
// import {IEmployee} from './IEmployee';
// import {Company} from '@api/models/Company';
// import {IUser, User} from '@api/models/IUser';
//
// export interface RequestItem {
//   employee: IEmployee;
//   appointments: IAppointment[];
// }
//
// export class RequestModel implements IReadModel {
//   static modelType = 'appointment';
//
//   id = 0;
//   owner: Company;
//   name = '';
//   scheduledDate: string;
//   items: RequestItem[] = [];
//   itemsCount: number;
//   total: number;
//   complete: boolean;
//   customerNotes: string;
//   status: string;
//   user: IUser;
//
//   static fromJS(data: any): RequestModel {
//     data = typeof data === 'object' ? data : {};
//     const result = new RequestModel();
//     if (data) {
//       result.id = data.id;
//       result.owner = Company.fromJs(data.owner);
//       result.complete = data.complete;
//       result.scheduledDate = data.scheduledDate;
//       result.total = data.total;
//       result.itemsCount = 0;
//       result.user = User.fromJs(data.user);
//       result.status = data.status;
//       result.name = result.user.name;
//       result.customerNotes = data.customerNotes;
//       const items = {};
//       for (const apt of data.appointments.map(a => Appointment.fromJS(a))) {
//         result.itemsCount += 1;
//         if (items.hasOwnProperty(apt.employee.id)) {
//           items[apt.employee.id].appointments.push(apt);
//         } else {
//           items[apt.employee.id] = {
//             employee: apt.employee,
//             appointments: [apt]
//           };
//         }
//       }
//       result.items = Object.keys(items).map(k => items[k]);
//     }
//     return result;
//   }
// }
//
// @Injectable({
//   providedIn: 'root'
// })
// export class RequestAdapter implements Adapter<RequestModel> {
//   adapt(item: any): RequestModel {
//     return RequestModel.fromJS(item);
//   }
// }
//
// export interface AddAppointmentWriteModel {
//   start: Moment;
//   employee?: number;
//   service: number;
// }
