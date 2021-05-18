import {AxiosInstance, AxiosResponse} from 'axios';
import baseApiAxios from '../common/clients/base-api';
import {LoginRequest} from './requests';
import {User, userParser} from '../users/models';
import {LoginResponse, RefreshAccessTokenResponse} from './models';
import {getRefreshToken, isLoggedIn, removeToken, setRefreshToken, setToken} from '../common/session-storage';


const authUrl = 'auth/';
const facebookUrl = 'auth/facebook/';


export const authApi = {
    verifyEmail(key: string) {
        return baseApiAxios.post(authUrl + 'registration/verify-email/', {key});
    },
    login(request: LoginRequest): Promise<User | null> {
        return baseApiAxios.post<LoginResponse>(authUrl + 'login/', request)
            .then(completeLogin);
    },

    authenticateFacebook(accessToken: string): Promise<User | null> {
        return baseApiAxios.post<LoginResponse>(facebookUrl, {accessToken})
            .then(completeLogin);
    },

    logout() {
        return baseApiAxios.post<{ detail: string }>(authUrl + 'logout/', {})
            .then(removeToken);
    },

    whoAmI(): Promise<User | null> {
        if (isLoggedIn()) {
            return baseApiAxios.get<User>(authUrl + 'user/')
                .then(({data}) => userParser(data))
                .catch(error => {
                    removeToken();
                    return Promise.resolve(null);
                });
        }
        return Promise.resolve(null);
    },

    refreshAccessToken(axios: AxiosInstance): Promise<string | null> {
        const refresh = getRefreshToken();
        return axios.post<RefreshAccessTokenResponse>(authUrl + 'token/refresh/', {refresh})
            .then(({data}) => {
                    setToken(data.access);
                    return data.access;
                }
            );
    }
}

const completeLogin = ({data}: AxiosResponse<LoginResponse>) => {
    setToken(data.accessToken);
    setRefreshToken(data.refreshToken);
    return userParser(data.user);
}

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
