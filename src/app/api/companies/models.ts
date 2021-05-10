import {IEmployee} from '../employees/models';
import {Service, ServiceCategory} from '../services/models';
import {CompanyConfig} from '../admin-companies/models';
import {IReadModel} from '../common/models/IReadModel';
import moment, {Moment} from 'moment';

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
    employees: IEmployee[];
    services: Service[];
    serviceCategories: ServiceCategory[];
    config: CompanyConfig;
}

export class Slot {
    constructor(public start: Moment, public end: Moment) {
    }

    static fromJs(item: any): Slot {
        return new Slot(
            moment.utc(item.start),
            moment.utc(item.end)
        );
    }
}
