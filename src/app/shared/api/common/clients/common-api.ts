import {AxiosInstance, AxiosRequestConfig} from 'axios';
import {getToken} from '../session-storage';
import {ApiBaseError} from '../api-errors';


export const setupAuthHandlers = (apiAxios: AxiosInstance) => {
    const onRequestSuccess = (config: AxiosRequestConfig) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    }

    const onResponseError = (error: any) => {
        let { status, statusText, headers, data } = error.response;
            if (status === 401) {
                return statusText;
            }
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
        // }
    }

    apiAxios.interceptors.request.use(onRequestSuccess);
    apiAxios.interceptors.response.use(undefined, onResponseError)
}
