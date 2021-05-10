export {}
// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {ModelViewSetClient} from '@api/clients/ModelViewSetClient';
// import {IAppointment, RequestAdapter, RequestModel} from '@api/models';
// import {environment} from '../../../environments/environment';
// import {Observable} from 'rxjs';
// import {map} from 'rxjs/operators';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class RequestAdminClient extends ModelViewSetClient<RequestModel, object> {
//   constructor(http: HttpClient,
//               adapter: RequestAdapter) {
//     super(http, adapter, environment.apiUrl + 'admin/requests/');
//   }
//
//   accept(id: number): Observable<RequestModel> {
//     return this.http.patch<RequestModel>(this.baseUrl + `${id}/accept/`, {})
//       .pipe(map(this.adapter.adapt));
//   }
//
//   reject(id: number): Observable<RequestModel> {
//     return this.http.patch<RequestModel>(this.baseUrl + `${id}/reject/`, {})
//       .pipe(map(this.adapter.adapt));
//   }
// }
