import {IConfigWriteModel} from '../admin-companies/models';


export interface CompanyDetailsRequest {
    name: string;
}

export interface ICompanyWriteModel {
    id: number;
    name: string;
    address: string;
    about: string;
    instagram: string;
    phoneNumber: string;
    whatsapp: string;
    facebook: string;
    config?: IConfigWriteModel;
}
