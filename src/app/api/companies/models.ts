import {Employee} from '../employees/models';
import {Service, ServiceCategory} from '../services/models';
import {CompanyConfig} from '../admin-companies/models';
import {IReadModel} from '../common/models';
import {Moment} from 'moment';

export interface Company extends IReadModel {
    id: number;
    name: string;
    address: string;
    // avatar: string;
    about: string;
    instagram: string;
    phoneNumber: string;
    whatsapp: string;
    facebook: string;
    config: CompanyConfig;
}

export interface CompanyDetails extends IReadModel {
    id: number;
    name: string;
    address: string;
    avatar: string;
    about: string;
    employees: Employee[];
    services: Service[];
    serviceCategories: ServiceCategory[];
    config: CompanyConfig;
}

export interface Slot {
    id: number;
    date: string;
    start: Moment;
    end: Moment;
    title: string;
}
