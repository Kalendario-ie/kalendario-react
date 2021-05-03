import {getApp, PermissionModels} from '../common/permissions';
import {IReadModel} from '../common/models/IReadModel';
import {Company} from '../companies/models';


export function checkForPermission(user: IUser, permission: string, model: PermissionModels) {
    return user.permissions.includes(`${getApp(model)}.${permission}_${model}`);
}

class IEmployeeResourceModel {
}

export class User implements IUser {
    static modelType = PermissionModels.user;

    id: number;
    firstName: string;
    lastName: string;
    name: string;
    email: string;
    employee: IEmployeeResourceModel | null;
    employeeId: number;
    groups: number[] = [];
    permissions: string[] = [];
    company: Company | null;
    verified: boolean;
    private EmployeeResourceModel: any;

    static AnonymousUser(): User {
        return ANONYMOUS_USER;
    }

    static fromJs(data?: any): User {
        data = typeof data === 'object' ? data : {};
        return new User(data);
    }

    constructor(data: any) {
        this.id = data.id;
        this.firstName = data.firstName ? data.firstName : '';
        this.lastName = data.lastName ? data.lastName : '';
        this.name = data.name ? data.name : '';
        this.email = data.email ? data.email : '';
        this.employeeId = data.employeeId ? data.employeeId : '';
        this.employee = data.employee ? this.EmployeeResourceModel.fromJs(data.employee) : null;
        this.groups = data.groups ? data.groups : [];
        this.permissions = data.permissions ? data.permissions : [];
        this.company = data.owner ? Company.fromJs(data.owner) : null;
        this.verified = !!data.verified;
    }
}

export interface IUser extends IReadModel {
    firstName: string;
    lastName: string;
    email: string;
    employee: IEmployeeResourceModel | null;
    employeeId: number;
    groups: number[];
    permissions: string[];
    company: Company | null;
    verified: boolean;
}


export interface IUserWriteModel {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    employeeId: number;
    groups: number[];
}

const ANONYMOUS_USER = new User({});
