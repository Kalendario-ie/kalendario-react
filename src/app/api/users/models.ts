import {getApp, PermissionModels} from '../common/permissions';
import {IReadModel} from '../common/models/IReadModel';
import {Employee} from '../employees/models';
import {Company, companyParser} from '../companies';


export function checkForPermission(user: User, permission: string, model: PermissionModels) {
    return user.permissions.includes(`${getApp(model)}.${permission}_${model}`);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const userParser = (data: any) => {
    return {
        ...data,
        employee: data.employee ? Employee.fromJs(data.employee) : null,
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




