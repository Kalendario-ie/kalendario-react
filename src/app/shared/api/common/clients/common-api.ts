import {AxiosInstance, AxiosRequestConfig} from 'axios';
import {getRefreshToken, getToken, setToken} from '../session-storage';
import {ApiBaseError} from '../api-errors';
import {RefreshAccessTokenResponse} from '../../auth/models';


export const setupAuthHandlers = (apiAxios: AxiosInstance) => {
    const onRequestSuccess = (config: AxiosRequestConfig) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    }

    const onResponseError =  async (error: any) => {
        let {status, headers, config, data} = error.response;
        // Refresh access token
        if (status === 401 && !config._retry) {
            config._retry = true;
            const access_token = await refreshAccessToken(apiAxios);
            config.headers.Authorization = `Bearer ${access_token}`;
            return apiAxios(config);
        }
        // Create Api Validation Response
        if (status === 422) {
            return Promise.reject<ApiBaseError>({status, detail: data.detail});
        }
        const applicationError = headers.get('Application-Error');
        if (applicationError) {
            return Promise.reject(applicationError);
        }
        let modalStateErrors = '';
        if (data && typeof data === 'object') {
            for (const key in Object.keys(data)) {
                if (data[key]) {
                    if (key !== 'message' && key !== 'detail') {
                        modalStateErrors += `${key}:`;
                    }
                    modalStateErrors += `${data[key]}\n`;
                }
            }
        }
        return Promise.reject(modalStateErrors || data || 'Server Error');
    }

    apiAxios.interceptors.request.use(onRequestSuccess);
    apiAxios.interceptors.response.use((response) => response, onResponseError);
}

export function refreshAccessToken(axios: AxiosInstance): Promise<string> {
    const refresh = getRefreshToken();
    return axios.post<RefreshAccessTokenResponse>('auth/token/refresh/', {refresh})
        .then(({data}) => {
                setToken(data.access);
                return data.access;
            }
        );
}
