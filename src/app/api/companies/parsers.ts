import moment from 'moment';
import {otherCategory} from 'src/app/api/services';
import {serviceCategoryParser, serviceParser} from 'src/app/api/services/parsers';
import {Employee} from '../employees/models';
import {CompanyConfig} from '../admin-companies/models';
import {Company, CompanyDetails, Slot} from './models';

const imageStorage = 'https://res.cloudinary.com/gchahm/';

export function companyDetailsParser(data: any): CompanyDetails {
    let hasOtherCategory = false;
    const services = data.services.map((service: any) => {
        if (!service.category) {
            hasOtherCategory = true;
        }
        return serviceParser(service);
    });
    const serviceCategories = data.serviceCategories.map((cat: any) => serviceCategoryParser(cat));
    if (hasOtherCategory) {
        serviceCategories.push(otherCategory);
    }
    return {
        ...data,
        // avatar = data.avatar ? environment.imageStorage + data.avatar : environment.assetUrl + 'img/default-avatar.jpg';
        avatar: imageStorage + data.avatar,
        employees: data.employees.map((employee: any) => Employee.fromJs(employee)),
        services: services,
        serviceCategories: serviceCategories,
        config: CompanyConfig.fromJs(data.config)
    }
}

export function companyParser(data: any): Company {
    return {
        ...data,
        // this.avatar = data.avatar ? environment.imageStorage + data.avatar : environment.assetUrl + 'img/default-avatar.jpg';
        config: CompanyConfig.fromJs(data.config)
    }
}


export function slotParser(data: any): Slot {
    const start = moment.utc(data.start);
    const end = moment.utc(data.end);
    return {
        start,
        end,
        title: start.format('HH:mm') + ' - ' + end.format('HH:mm'),
    }
}
