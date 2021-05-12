import {Person} from 'src/app/api/common/models/person';

export function personParser(data: any): Person {
    return {
        ...data
    }
}
