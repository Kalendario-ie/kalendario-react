export {}
// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {ModelViewSetClient} from '@api/clients/ModelViewSetClient';
// import {IGroup, GroupAdapter, Permission, PermissionAdapter} from '@api/models';
// import {environment} from '../../../environments/environment';
// import {Observable} from 'rxjs';
// import {map} from 'rxjs/operators';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class GroupAdminClient extends ModelViewSetClient<IGroup, object> {
//   constructor(http: HttpClient,
//               adapter: GroupAdapter,
//               private permissionAdapter: PermissionAdapter) {
//     super(http, adapter, environment.apiUrl + 'core/groups/');
//   }
//
//   permissions(): Observable<Permission[]> {
//     return this.http.get<Permission[]>(this.baseUrl + 'permissions/').pipe(
//       map(results => results.map(r => this.permissionAdapter.adapt(r)))
//     )
//   }
// }
//
