export {}
// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {ModelViewSetClient} from '@api/clients/ModelViewSetClient';
// import {
//   Company,
//   CompanyAdapter,
//   CompanyConfig,
//   CompanyStripeDetails,
//   CompanyStripeDetailsAdapter,
//   ConfigAdapter
// } from '@api/models';
// import {environment} from '../../../environments/environment';
// import {Observable} from 'rxjs';
// import {map} from 'rxjs/operators';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class CompanyAdminClient extends ModelViewSetClient<Company, object> {
//   constructor(http: HttpClient,
//               adapter: CompanyAdapter,
//               private stripeAdapter: CompanyStripeDetailsAdapter,
//               private configAdapter: ConfigAdapter) {
//     super(http, adapter, environment.apiUrl + 'admin/companies/');
//   }
//
//   stripe = environment.apiUrl + 'billing/accounts/';
//
//   config(id, model): Observable<CompanyConfig> {
//     return this.http.patch<CompanyConfig>(this.baseUrl + id + '/config/', model).pipe(map(this.configAdapter.adapt));
//   }
//
//   uploadProfilePicture(id: number, file: File): Observable<Company> {
//     const formData = new FormData();
//     formData.append('image', file);
//     return this.http.patch<Company>(this.baseUrl + id + '/photo/', formData)
//       .pipe(map(this.adapter.adapt));
//   }
//
//   stripeUrl(id: number): Observable<{ url: string }> {
//     return this.http.post<{url: string}>(`${this.stripe}${id}/connect/`, {});
//   }
//
//   stripeDetails(id: number): Observable<CompanyStripeDetails> {
//     return this.http.get<CompanyStripeDetails>(`${this.stripe}${id}/`).pipe(map(this.stripeAdapter.adapt));
//   }
// }
//
