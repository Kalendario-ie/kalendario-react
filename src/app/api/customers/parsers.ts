import {personParser} from 'src/app/api/common/parsers';
import {Customer} from 'src/app/api/customers/models';


export function customerParser(data?: any): Customer {
    return  {
        ...personParser(data),
    }

}
