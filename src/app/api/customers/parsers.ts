import {PermissionModel} from 'src/app/api/auth';
import {personParser} from 'src/app/api/common/parsers';
import {Customer} from 'src/app/api/customers/models';
import {SaveCustomerRequest} from '.';


export function customerParser(data?: any): Customer {
    return {
        ...personParser(data),
        permissionModel: PermissionModel.customer,
    }

}

export function saveCustomerRequestParser(customer: Customer | null): SaveCustomerRequest {
    return customer ? {
        email: customer.email,
        firstName: customer.firstName,
        lastName: customer.lastName,
        phone: customer.phone
    } : {
        email: '', firstName: '', lastName: '', phone: ''
    }
}
