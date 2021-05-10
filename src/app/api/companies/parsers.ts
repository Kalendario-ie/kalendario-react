import {Service, ServiceCategory} from '../services/models';
import {Employee} from '../employees/models';
import {CompanyConfig} from '../admin-companies/models';
import {Company, CompanyDetails} from './models';

export function companyDetailsParser(data: any): CompanyDetails {
    let hasOtherCategory = false;
    const services = data.services.map((service: any) => {
        if (!service.category) {
            hasOtherCategory = true;
        }
        return Service.fromJs(service);
    });
    const serviceCategories = data.serviceCategories.map((cat: any) => ServiceCategory.fromJs(cat));
    if (hasOtherCategory) {
        serviceCategories.push(ServiceCategory.otherCategory());
    }
    return {
        ...data,
        // this.avatar = data.avatar ? environment.imageStorage + data.avatar : environment.assetUrl + 'img/default-avatar.jpg';
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
