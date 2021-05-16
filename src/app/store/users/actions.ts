import {Appointment} from 'src/app/api/appointments';
import {ApiBaseError} from 'src/app/api/common/api-errors';
import {RequestModelGetParams} from 'src/app/api/companies';
import {ACTION_TYPES} from 'src/app/store/users/types';
import {action} from 'typesafe-actions';


export const eventsRequest = (request: RequestModelGetParams) =>
    action(ACTION_TYPES.EVENTS_REQUEST, {start: request.start.toISOString(), end: request.end.toISOString()})

export const eventsRequestSuccess = (start: string, end: string, events: Appointment[]) =>
    action(ACTION_TYPES.EVENTS_REQUEST_SUCCESS, {start, end, events})

export const eventsRequestFail = (error: ApiBaseError) =>
    action(ACTION_TYPES.EVENTS_REQUEST_FAIL, error)

export const setSelectedEvent = (appointment: Appointment | null) =>
    action(ACTION_TYPES.SET_SELECTED_EVENT, appointment)
