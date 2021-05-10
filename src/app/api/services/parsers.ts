import {Service, ServiceCategory} from 'src/app/api/services/models';
import {timeFromString, Zero} from '../common/models/time-of-day';


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
