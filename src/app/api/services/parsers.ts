import {Service, ServiceCategory} from 'src/app/api/services/models';


export function serviceParser(data: any): Service {
    return {
        ...data,
    }
}

export function serviceCategoryParser(data: any): ServiceCategory {
    return {
        ...data
    }
}
