export {}
// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {environment} from '../../../environments/environment';
// import {catchError, map, switchMap, tap} from 'rxjs/operators';
// import {Observable, of} from 'rxjs';
//
// import {IUser, User, UserAdapter} from '../models/IUser';
// import {LoginModel} from '@api/models/LoginModel';
// import {FacebookAuthService} from '@app/auth/services/facebook-auth.service';
// import {IChangePassword, ISocialAccount, ResetPassword} from '@api/models';
// import {parseSocial} from '@api/models/auth/ISocialAccount';
//
// export interface RegisterModel {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password1: string;
//   password2: string;
// }
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//
//   private baseUrl = environment.apiUrl + 'auth/';
//   private facebookUrl = environment.apiUrl + 'auth/facebook/';
//
//   constructor(private http: HttpClient,
//               private facebookAuth: FacebookAuthService,
//               private adapter: UserAdapter) {
//   }
//
//   static setToken(token: string) {
//     localStorage.setItem('token', token);
//   }
//
//   static getToken(): string {
//     return localStorage.getItem('token');
//   }
//
//   static removeToken() {
//     localStorage.removeItem('token');
//     localStorage.removeItem('refreshToken');
//   }
//
//   static setRefreshToken(token: string) {
//     localStorage.setItem('refreshToken', token);
//   }
//
//   static getRefreshToken(): string {
//     return localStorage.getItem('refreshToken');
//   }
//
//   static isLoggedIn() {
//     return !!AuthService.getToken();
//   }
//
//   verifyEmail(key: string) {
//     return this.http.post(this.baseUrl + 'registration/verify-email/', {key});
//   }
//
//   logout() {
//     return this.http.post<{ detail: string }>(this.baseUrl + 'logout/', {}).pipe(
//       tap(() => AuthService.removeToken()),
//       tap(() => this.facebookAuth.logout()),
//     );
//   }
//
//   login(user: LoginModel): Observable<IUser> {
//     return this.http.post<LoginResponse>(this.baseUrl + 'login/', user).pipe(
//       tap(({accessToken}) => AuthService.setToken(accessToken)),
//       tap(({refreshToken}) => AuthService.setRefreshToken(refreshToken)),
//       switchMap(() => this.whoAmI())
//     );
//   }
//
//   refreshAccessToken(): Observable<string> {
//     const refresh = AuthService.getRefreshToken();
//     return this.http.post<RefreshAccessTokenResponse>(this.baseUrl + 'token/refresh/', {refresh}).pipe(
//       tap(({access}) => AuthService.setToken(access)),
//       map(({access}) => access)
//     );
//   }
//
//   socialAccounts(): Observable<ISocialAccount[]> {
//     return this.http.get<any[]>(this.baseUrl + 'accounts/').pipe(
//       map(items => items.map(i => parseSocial(i)))
//     );
//   }
//
//   facebookLogin(authToken): Observable<IUser> {
//     return this.authenticateFacebook(authToken);
//   }
//
//   facebookConnect(accessToken) {
//     return this.http.post(this.facebookUrl + 'connect/', {access_token: accessToken});
//   }
//
//   register(form: RegisterModel): Observable<IUser> {
//     return this.http.post<LoginResponse>(this.baseUrl + 'registration/', form).pipe(
//       tap(({accessToken}) => AuthService.setToken(accessToken)),
//       tap(({refreshToken}) => AuthService.setRefreshToken(refreshToken)),
//         switchMap(() => this.whoAmI())
//     );
//   }
//
//   resetPasswordRequest(form: {email: string}) {
//     return this.http.post<{detail: string}>(this.baseUrl + 'password/reset/', form);
//   }
//
//   resetPasswordConfirm(form: ResetPassword) {
//     return this.http.post<any>(this.baseUrl + 'password/reset/confirm/', form);
//   }
//
//   changePassword(model: IChangePassword) {
//     return this.http.post(this.baseUrl + 'password/change/', model);
//   }
//
//   public resendConfirmationEmail() {
//     return this.http.post(this.baseUrl + 'email/', {});
//   }
//
//   public whoAmI(): Observable<IUser> {
//     this.facebookAuth.init();
//     if (AuthService.isLoggedIn()) {
//       return this.getUser();
//     }
//     return this.facebookAuth.getToken().pipe(
//       switchMap(authToken => this.authenticateFacebook(authToken)),
//       catchError(err => of(User.AnonymousUser()))
//     );
//   }
//
//   private getUser(): Observable<IUser> {
//     return this.http.get<IUser>(this.baseUrl + 'user/')
//       .pipe(
//         map(this.adapter.adapt),
//         catchError(() => {
//           AuthService.removeToken();
//           return of(User.AnonymousUser());
//         })
//       );
//   }
//
//   private authenticateFacebook(authToken: string): Observable<IUser> {
//     return this.http.post<{ key: string }>(this.facebookUrl, {access_token: authToken}).pipe(
//       tap(({key}) => AuthService.setToken(key)),
//       switchMap(({key}) => this.whoAmI())
//     );
//   }
// }
//
// interface LoginResponse {
//   accessToken: string;
//   refreshToken: string;
//   user: IUser;
// }
//
// interface RefreshAccessTokenResponse {
//   access: string;
//   accessTokenExpiration: string;
// }
