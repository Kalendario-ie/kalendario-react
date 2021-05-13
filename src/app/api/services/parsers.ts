import {timeFromString, Zero} from 'src/app/api/common/models';
import {Service, ServiceCategory} from 'src/app/api/services/models';


export function serviceParser(data: any): Service {
    return {
        ...data,
        duration: data.duration ? timeFromString(data.duration) : Zero()
    }
}

export function serviceCategoryParser(data: any): ServiceCategory {
    return {
        ...data
    }
}
