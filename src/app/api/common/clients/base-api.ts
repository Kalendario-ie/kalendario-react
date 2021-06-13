import axios from 'axios';
import {setupAuthHandlers} from './common-api';

const baseApiAxios = axios.create({});

export const configureBaseApi = () => {
    baseApiAxios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8070/api/';
    setupAuthHandlers(baseApiAxios);
}

export default baseApiAxios;
