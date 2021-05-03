export {}
// import {Moment} from 'moment';
// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {Observable} from 'rxjs';
// import {map} from 'rxjs/operators';
// import {IAppointment, AppointmentAdapter} from '@api/models';
// import {ModelViewSetClient} from '@api/clients/ModelViewSetClient';
// import {ListResult} from '@api/results/IListResult';
// import {environment} from '../../../environments/environment';
// import {AppointmentHistory, IAppointmentHistory} from '@api/models/AppointmentHistory';
//
// export interface AdminAppointmentParams {
//   fromDate?: Moment;
//   toDate?: Moment;
//   customer?: number;
//   employee?: number;
//   employees?: number[];
//   services?: number[];
// }
//
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AppointmentAdminClient extends ModelViewSetClient<IAppointment, AdminAppointmentParams> {
//   constructor(http: HttpClient,
//               adapter: AppointmentAdapter) {
//     super(http, adapter, environment.apiUrl + 'admin/appointments/');
//   }
//
//   history(id: number): Observable<ListResult<IAppointmentHistory>> {
//     return this.http.get<ListResult<IAppointmentHistory>>(this.baseUrl + `${id}/history/`)
//       .pipe(
//         map(project => {
//           project.results = project.results.map(r => AppointmentHistory.fromJS(r));
//           return project;
//         })
//       );
//   }
//
//   createLock(model: any): Observable<IAppointment> {
//     return this.http.post<IAppointment>(this.baseUrl + 'lock/', model).pipe(map(r => this.adapter.adapt(r)));
//   }
//
//   updateLock(id, model): Observable<IAppointment> {
//     return this.http.patch<IAppointment>(this.baseUrl + `${id}/plock/`, model).pipe(map(this.adapter.adapt));
//   }
// }
// @ts-ignore
