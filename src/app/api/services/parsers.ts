import {timeFromString} from 'src/app/api/common/models';
import {Service, ServiceCategory} from 'src/app/api/services/models';


export function serviceParser(data: any): Service {
    return {
        ...data,
        duration: timeFromString(data.duration)
    }
}

export function serviceCategoryParser(data: any): ServiceCategory {
    return {
        ...data
    }
}
