import axios from 'axios';
import {setupAuthHandlers} from './common-api';

const baseApiAxios = axios.create({});

export const configureBaseApi = () => {
    baseApiAxios.defaults.baseURL = 'http://localhost:8070/api/';
    setupAuthHandlers(baseApiAxios);
}

export default baseApiAxios;
