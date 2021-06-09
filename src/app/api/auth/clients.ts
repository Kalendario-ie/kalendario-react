import {AxiosInstance, AxiosResponse} from 'axios';
import {userParser} from 'src/app/api/users';
import baseApiAxios from '../common/clients/base-api';
import {getRefreshToken, isLoggedIn, removeToken, setRefreshToken, setToken} from '../common/session-storage';
import {User} from '../users/models';
import {LoginResponse, RefreshAccessTokenResponse} from './models';
import {LoginRequest, RegisterRequest} from './requests';


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

    register(request: RegisterRequest): Promise<User | null> {
        return baseApiAxios.post<LoginResponse>(authUrl + 'registration/', request)
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

