import {User} from 'src/app/api/users';

export enum AuthPermission {
    add_groupprofile = 'add_groupprofile',
    change_groupprofile = 'change_groupprofile',
    delete_groupprofile = 'delete_groupprofile',
    view_groupprofile = 'view_groupprofile',
    add_user = 'add_user',
    change_user = 'change_user',
    delete_user = 'delete_user',
    view_user = 'view_user',
    add_appointment = 'add_appointment',
    change_appointment = 'change_appointment',
    delete_appointment = 'delete_appointment',
    overlap_appointment = 'overlap_appointment',
    view_appointment = 'view_appointment',
    add_company = 'add_company',
    change_company = 'change_company',
    delete_company = 'delete_company',
    view_company = 'view_company',
    add_config = 'add_config',
    change_config = 'change_config',
    delete_config = 'delete_config',
    view_config = 'view_config',
    add_customer = 'add_customer',
    change_customer = 'change_customer',
    delete_customer = 'delete_customer',
    view_customer = 'view_customer',
    add_employee = 'add_employee',
    change_employee = 'change_employee',
    delete_employee = 'delete_employee',
    view_employee = 'view_employee',
    add_historicalappointment = 'add_historicalappointment',
    change_historicalappointment = 'change_historicalappointment',
    delete_historicalappointment = 'delete_historicalappointment',
    view_historicalappointment = 'view_historicalappointment',
    add_person = 'add_person',
    change_person = 'change_person',
    delete_person = 'delete_person',
    view_person = 'view_person',
    add_photo = 'add_photo',
    change_photo = 'change_photo',
    delete_photo = 'delete_photo',
    view_photo = 'view_photo',
    add_request = 'add_request',
    change_request = 'change_request',
    delete_request = 'delete_request',
    view_request = 'view_request',
    add_schedule = 'add_schedule',
    change_schedule = 'change_schedule',
    delete_schedule = 'delete_schedule',
    view_schedule = 'view_schedule',
    add_schedulingpanel = 'add_schedulingpanel',
    change_schedulingpanel = 'change_schedulingpanel',
    delete_schedulingpanel = 'delete_schedulingpanel',
    view_schedulingpanel = 'view_schedulingpanel',
    add_service = 'add_service',
    change_service = 'change_service',
    delete_service = 'delete_service',
    view_service = 'view_service',
    add_servicecategory = 'add_servicecategory',
    change_servicecategory = 'change_servicecategory',
    delete_servicecategory = 'delete_servicecategory',
    view_servicecategory = 'view_servicecategory',
    add_shift = 'add_shift',
    change_shift = 'change_shift',
    delete_shift = 'delete_shift',
    view_shift = 'view_shift',
    add_timeframe = 'add_timeframe',
    change_timeframe = 'change_timeframe',
    delete_timeframe = 'delete_timeframe',
    view_timeframe = 'view_timeframe',

}


export enum PermissionModel {
    groupprofile = 'groupprofile',
    user = 'user',
    appointment = 'appointment',
    company = 'company',
    config = 'config',
    customer = 'customer',
    employee = 'employee',
    historicalappointment = 'historicalappointment',
    person = 'person',
    photo = 'photo',
    request = 'request',
    schedule = 'schedule',
    schedulingpanel = 'schedulingpanel',
    service = 'service',
    servicecategory = 'servicecategory',
    shift = 'shift',
    timeframe = 'timeframe',
}

export enum PermissionType {
    add = 'add',
    change = 'change',
    delete = 'delete',
    view = 'view',
}

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
