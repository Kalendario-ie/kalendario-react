import {getApp, PermissionModels} from '../common/permissions';
import {IReadModel} from 'src/app/api/common/models';
import {Employee, employeeParser} from '../employees';
import {Company, companyParser} from '../companies';


export function checkForPermission(user: User, permission: string, model: PermissionModels) {
    return user.permissions.includes(`${getApp(model)}.${permission}_${model}`);
}

export function userParser(data: any): User {
    return {
        ...data,
        employee: data.employee ? employeeParser(data.employee) : null,
        company: data.owner ? companyParser(data.owner) : null,
        verified: !!data.verified
    }
}

export interface User extends IReadModel {
    firstName: string;
    lastName: string;
    email: string;
    employee: Employee | null;
    employeeId: number;
    groups: number[];
    permissions: string[];
    company: Company | null;
    verified: boolean;
}




