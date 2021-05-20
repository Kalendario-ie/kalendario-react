import baseModelRequest from 'src/app/api/common/clients/base-django-api';
import { employeeParser } from './parsers';

const baseUrl = 'admin/employees/';

export const adminEmployeeClient = {
    ...baseModelRequest(baseUrl, employeeParser),
}
