import {ACTION_TYPES} from './types';
import {action} from 'typesafe-actions';
import {ApiBaseError} from '../../api/common/api-errors';
import {CompanyDetails, Slot, SlotRequestParams} from '../../api/companies';

export const companyDetailsRequest = (companyName: string) =>
    action(ACTION_TYPES.COMPANY_DETAILS_REQUEST, companyName);


export const companyDetailsRequestSuccess = (company: CompanyDetails) =>
    action(ACTION_TYPES.COMPANY_DETAILS_REQUEST_SUCCESS, company);


export const companyDetailsRequestFail = (apiError: ApiBaseError) =>
    action(ACTION_TYPES.COMPANY_DETAILS_REQUEST_FAIL, apiError);


export const setSelectedServiceId = (id: number | null) =>
    action(ACTION_TYPES.SET_SELECTED_SERVICE_ID, id);


export const slotsRequest = (request: SlotRequestParams) =>
    action(ACTION_TYPES.SLOTS_REQUEST, request);


export const slotsRequestSuccess = (slots: Slot[]) =>
    action(ACTION_TYPES.SLOTS_REQUEST_SUCCESS, slots);


export const setSelectedSlotId = (id: number) =>
    action(ACTION_TYPES.SET_SELECTED_SLOT_ID, id);
