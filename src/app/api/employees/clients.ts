export {}
// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {Observable} from 'rxjs';
// import {ModelViewSetClient} from '@api/clients/ModelViewSetClient';
// import {IEmployee, EmployeeAdapter} from '@api/models';
// import {environment} from '../../../environments/environment';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class EmployeeAdminClient extends ModelViewSetClient<IEmployee, object> {
//   constructor(http: HttpClient,
//               adapter: EmployeeAdapter) {
//     super(http, adapter, environment.apiUrl + 'admin/employees/');
//   }
//
//   uploadProfilePicture(id: number, file: File): Observable<{ url: string }> {
//     const formData = new FormData();
//     formData.append('image', file);
//     return this.http.post<{url: string}>(this.baseUrl + id + '/photo/', formData);
//   }
// }
