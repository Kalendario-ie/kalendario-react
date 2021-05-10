import {Employee, IEmployee} from '../employees/models';
import {Service, ServiceCategory} from '../services/models';
import {CompanyConfig, IConfigWriteModel} from '../admin-companies/models';
import {IReadModel} from '../common/models/IReadModel';
import moment, {Moment} from 'moment';

export class Company implements IReadModel {
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

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.address = data.address;
        this.instagram = data.instagram;
        this.phoneNumber = data.phoneNumber;
        this.whatsapp = data.whatsapp;
        this.facebook = data.facebook;
        this.about = data.about;
        // this.avatar = data.avatar ? environment.imageStorage + data.avatar : environment.assetUrl + 'img/default-avatar.jpg';
        this.config = CompanyConfig.fromJs(data.config);
    }

    static fromJs(data: any): Company {
        data = typeof data === 'object' ? data : {};
        return new Company(data);
    }

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

export class CompanyDetails implements IReadModel {
    static modelType = 'company';
    id: number;
    name: string;
    address: string;
    // avatar: string;
    about: string;
    employees: IEmployee[];
    services: Service[];
    serviceCategories: ServiceCategory[];
    config: CompanyConfig;

    static fromJs(data: any): CompanyDetails {
        data = typeof data === 'object' ? data : {};
        return  new CompanyDetails(data);
    }

    constructor(data: any) {
        let hasOtherCategory = false;
        this.id = data.id;
        this.name = data.name;
        this.address = data.address;
        this.about = data.about;
        // this.avatar = data.avatar ? environment.imageStorage + data.avatar : environment.assetUrl + 'img/default-avatar.jpg';
        this.employees = data.employees.map((employee: any) => Employee.fromJs(employee));
        this.services = data.services.map((service: any) => {
            if (!service.category) {
                hasOtherCategory = true;
            }
            return Service.fromJs(service);
        });
        this.serviceCategories = data.serviceCategories.map((cat: any) => ServiceCategory.fromJs(cat));
        if (hasOtherCategory) {
            this.serviceCategories.push(ServiceCategory.otherCategory());
        }
        this.config = CompanyConfig.fromJs(data.config);
    }
}

export interface IServiceCategoryWriteModel {
    id: number;
    name: string;
    color: string;
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
