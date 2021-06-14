import {AxiosInstance, AxiosResponse} from 'axios';
import baseApiAxios from '../common/clients/base-api';
import {getRefreshToken, isLoggedIn, removeToken, setRefreshToken, setToken} from '../common/session-storage';
import {AuthUser, LoginResponse, RefreshAccessTokenResponse} from './models';
import {authUserParser} from './parsers';
import {LoginRequest, RegisterRequest} from './requests';


const authUrl = 'auth/';
const facebookUrl = 'auth/facebook/';


export const authApi = {
    verifyEmail(key: string) {
        return baseApiAxios.post(authUrl + 'registration/verify-email/', {key});
    },
    login(request: LoginRequest): Promise<AuthUser | null> {
        return baseApiAxios.post<LoginResponse>(authUrl + 'login/', request)
            .then(completeLogin);
    },

    register(request: RegisterRequest): Promise<AuthUser | null> {
        return baseApiAxios.post<LoginResponse>(authUrl + 'registration/', request)
            .then(completeLogin);
    },

    authenticateFacebook(accessToken: string): Promise<AuthUser | null> {
        return baseApiAxios.post<LoginResponse>(facebookUrl, {accessToken})
            .then(completeLogin);
    },

    logout() {
        return baseApiAxios.post<{ detail: string }>(authUrl + 'logout/', {})
            .then(removeToken);
    },

    whoAmI(): Promise<AuthUser | null> {
        if (isLoggedIn()) {
            return baseApiAxios.get<AuthUser>(authUrl + 'user/')
                .then(({data}) => authUserParser(data))
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
    return authUserParser(data.user);
}

