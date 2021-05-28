import {IReadModel} from 'src/app/api/common/models';
import {getApp, PermissionModels} from '../common/permissions';
import {Company} from '../companies';
import {Employee} from '../employees';


export function checkForPermission(user: User, permission: string, model: PermissionModels) {
    return user.permissions.includes(`${getApp(model)}.${permission}_${model}`);
}

export interface User extends IReadModel {
    firstName: string;
    lastName: string;
    email: string;
    employee: Employee | null;
    employeeId: number;
    groups: number[];
    permissions: string[];
    company: { id: number, name: string } | null;
    verified: boolean;
}




