import {ApiListResult} from '../api-results';
import {convertMoment} from '../helpers';
import baseApiAxios from './base-api';
import {AxiosResponse} from 'axios';

function baseModelRequest<M, P>(baseUrl: string, adapter: (model: any) => M) {
    return {
        get(filter: P): Promise<ApiListResult<M>> {
            const params = convertMoment(filter);
            return baseApiAxios.get<ApiListResult<M>>(baseUrl, {params})
                .then(project => {
                        project.data.results = project.data.results.map(r => adapter(r));
                        return project.data;
                    }
                )
        },

        post(model: any): Promise<M> {
            return baseApiAxios.post(baseUrl, model)
                .then(result => adapter(result.data));
        },

        detail(id: number, params = {}): Promise<M> {
            return baseApiAxios.get<M>(baseUrl + id + '/', {params: {...params}})
                .then(result => adapter(result.data));
        },

        patch(id: number, model: any): Promise<M> {
            return baseApiAxios.patch<M>(baseUrl + id + '/', model)
                .then(result => adapter(result.data));
        },

        put(id: number, model: any): Promise<M> {
            return baseApiAxios.put<M>(baseUrl + id + '/', model)
                .then(result => adapter(result.data));
        },

        delete(id: number): Promise<AxiosResponse> {
            return baseApiAxios.delete<void>(baseUrl + id + '/');
        }
    }

}

export default baseModelRequest;
