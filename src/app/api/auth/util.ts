import {PermissionModel, PermissionType} from 'src/app/api/auth/permissions';
import {User} from 'src/app/api/users';

export function hasPermission(user: User, type: PermissionType, model: PermissionModel) {
    const app = getAppLabel(model);
    return user.permissions.includes(`${app}.${type}_${model}`);
}

function getAppLabel(model: PermissionModel): string {
    switch (model) {
        case PermissionModel.user:
        case PermissionModel.groupprofile:
            return 'core';
        default:
            return 'scheduling';
    }
}
