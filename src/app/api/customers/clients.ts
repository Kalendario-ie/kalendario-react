import baseModelRequest from 'src/app/api/common/clients/base-django-api';
import {requestParser} from 'src/app/api/requests';

const baseUrl = 'admin/customers/';

export const customerClient = {
    ...baseModelRequest(baseUrl, requestParser)
}
