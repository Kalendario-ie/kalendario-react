import {Person} from 'src/app/api/common/models';

export function personParser(data: any): Person {
    return {
        ...data
    }
}
