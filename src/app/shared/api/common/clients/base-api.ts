import axios from 'axios';

const baseApiAxios = axios.create({});
baseApiAxios.defaults.baseURL = 'http://localhost:8070/api/';


export default baseApiAxios;
