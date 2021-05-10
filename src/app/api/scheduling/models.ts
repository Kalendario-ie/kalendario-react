export {}
// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {ModelViewSetClient} from '@api/clients/ModelViewSetClient';
// import {Service, ServiceAdapter} from '@api/models';
// import {environment} from '../../../environments/environment';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class ServiceAdminClient extends ModelViewSetClient<Service, object> {
//   constructor(http: HttpClient,
//               adapter: ServiceAdapter) {
//     super(http, adapter, environment.apiUrl + 'admin/services/');
//   }
// }
// import {Injectable} from '@angular/core';
// import {Adapter} from '@api/adapter';
// import {IReadModel} from '@api/models/IReadModel';
// import {IEmployee} from './IEmployee';
//
// export class PanelManager {
//   /** Returns a new panel instance with the id provided added to the employees list */
//   static addEmployee(panel: SchedulingPanel, id: number): SchedulingPanel {
//     return {...panel, employees: [...panel.employees, id]};
//   }
//
//   /** Returns a new panel instance with the id provided removed from the employees list */
//   static removeEmployee(panel: SchedulingPanel, id: number) {
//     return {...panel, employees: panel.employees.filter(empId => empId !== id)};
//   }
//
//   /** Returns a new panel instance with the name updated with the provided value */
//   static updateName(panel: SchedulingPanel, value: string) {
//     return {...panel, name: value};
//   }
// }
//
// export class SchedulingPanel implements IReadModel {
//   static modelType = 'schedulingPanel';
//   id: number;
//   name: string = '';
//   employees: number[] = [];
//
//   static fromJs(data: any): SchedulingPanel {
//     data = typeof data === 'object' ? data : {};
//     const result = new SchedulingPanel();
//     if (data) {
//       result.id = data.id;
//       result.name = data.name;
//       result.employees = data.employees;
//     }
//     return result;
//   }
// }
//
// export interface ISchedulingPanelWriteModel {
//   id: number;
//   name: string;
//   employees: number[];
// }
//
// @Injectable({
//   providedIn: 'root'
// })
// export class SchedulingPanelAdapter implements Adapter<SchedulingPanel> {
//   adapt(data: any): SchedulingPanel {
//     return SchedulingPanel.fromJs(data);
//   }
// }
// import {environment} from '../../../environments/environment';
// import {Injectable} from '@angular/core';
// import {Adapter} from '@api/adapter';
// import {Person} from './IPerson';
// import {ISchedule, Schedule} from './ISchedule';
// import {Service} from './Service';
//
// export class EmployeeDashboardModel extends Person {
//   static modelType = 'employee';
//   id = 0;
//   firstName: string;
//   lastName: string;
//   name: string;
//   email: string;
//   phone: string;
//   schedule: ISchedule;
//   instagram: string;
//   photoUrl: string;
//   bio: string;
//   services: Service[] = [];
//
//   static fromJs(data: any): EmployeeDashboardModel {
//     data = typeof data === 'object' ? data : {};
//     const result = new EmployeeDashboardModel();
//     result.id = data.id;
//     result.firstName = data.firstName;
//     result.lastName = data.lastName;
//     result.name = data.name;
//     result.email = data.email;
//     result.phone = data.phone;
//     result.schedule = Schedule.fromJs(data.schedule);
//     result.instagram = data.instagram;
//     result.photoUrl = data.profileImg ? environment.imageStorage + data.profileImg
//       : environment.assetUrl + 'img/default-avatar.jpg';
//     result.bio = data.bio;
//     result.services = data.services.map(s => Service.fromJs(s));
//     return result;
//   }
// }
//
// @Injectable({
//   providedIn: 'root'
// })
// export class EmployeeDashboardAdapter implements Adapter<EmployeeDashboardModel> {
//   adapt(data: any): EmployeeDashboardModel {
//     return EmployeeDashboardModel.fromJs(data);
//   }
// }


