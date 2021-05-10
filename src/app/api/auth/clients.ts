import baseApiAxios from '../common/clients/base-api';
import {LoginRequest} from './requests';
import {User, userParser} from '../users/models';
import {LoginResponse} from './models';
import {removeToken, setRefreshToken, setToken} from '../common/session-storage';





const authUrl = 'auth/';
// const facebookUrl = 'auth/facebook/';

export function whoAmI(): Promise<User> {
    // this.facebookAuth.init();
    // if (isLoggedIn()) {
    return getUser();
    // }
}

function getUser(): Promise<User> {
    return baseApiAxios.get<User>(authUrl + 'user/')
        .then(({data}) => userParser(data))
        .catch(error => {
            removeToken();
        });
}



function authApi() {

    return {
        verifyEmail(key: string) {
            return baseApiAxios.post(authUrl + 'registration/verify-email/', {key});
        },
        login(request: LoginRequest): Promise<User> {
            return baseApiAxios.post<LoginResponse>(authUrl + 'login/', request)
                .then(response => {
                    setToken(response.data.accessToken);
                    setRefreshToken(response.data.refreshToken);
                    return whoAmI();
                });
        }
    }
}

export default authApi;

//
//     logout() {
//         return this.http.post<{ detail: string }>(this.baseUrl + 'logout/', {}).pipe(
//             tap(() => AuthService.removeToken()),
//             tap(() => this.facebookAuth.logout()),
//         );
//     }
//

//

//
//     socialAccounts(): Observable<ISocialAccount[]> {
//         return this.http.get<any[]>(this.baseUrl + 'accounts/').pipe(
//             map(items => items.map(i => parseSocial(i)))
//         );
//     }
//
//     facebookLogin(authToken): Observable<IUser> {
//         return this.authenticateFacebook(authToken);
//     }
//
//     facebookConnect(accessToken) {
//         return this.http.post(this.facebookUrl + 'connect/', {access_token: accessToken});
//     }
//
//     register(form: RegisterModel): Observable<IUser> {
//         return this.http.post<LoginResponse>(this.baseUrl + 'registration/', form).pipe(
//             tap(({accessToken}) => AuthService.setToken(accessToken)),
//             tap(({refreshToken}) => AuthService.setRefreshToken(refreshToken)),
//             switchMap(() => this.whoAmI())
//         );
//     }
//
//     resetPasswordRequest(form: {email: string}) {
//         return this.http.post<{detail: string}>(this.baseUrl + 'password/reset/', form);
//     }
//
//     resetPasswordConfirm(form: ResetPassword) {
//         return this.http.post<any>(this.baseUrl + 'password/reset/confirm/', form);
//     }
//
//     changePassword(model: IChangePassword) {
//         return this.http.post(this.baseUrl + 'password/change/', model);
//     }
//
//     public resendConfirmationEmail() {
//         return this.http.post(this.baseUrl + 'email/', {});
//     }
//

//     return this.facebookAuth.getToken().pipe(
//         switchMap(authToken => this.authenticateFacebook(authToken)),
//         catchError(err => of(User.AnonymousUser()))
//     );
// }

//

//
// function authenticateFacebook(authToken: string): Observable<IUser> {
//         return this.http.post<{ key: string }>(this.facebookUrl, {access_token: authToken}).pipe(
//             tap(({key}) => AuthService.setToken(key)),
//             switchMap(({key}) => this.whoAmI())
//         );
//     }
// }
//



