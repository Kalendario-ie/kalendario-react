import {Moment} from 'moment';
import {RequestModel} from 'src/app/api/requests';
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


export const slotsRequestSuccess = (slots: Slot[]) => {
    let slotMap: {[key: string]: Slot[]} = {};
    slots.forEach(slot => {
        if (slotMap[slot.date]) {
            slotMap[slot.date].push(slot)
        } else {
            slotMap[slot.date] = [slot]
        }
    })
    return action(ACTION_TYPES.SLOTS_REQUEST_SUCCESS, slotMap);
}


export const slotsRequestFail = () =>
    action(ACTION_TYPES.SLOTS_REQUEST_FAIL);


export const setSelectedSlotId = (id: number) =>
    action(ACTION_TYPES.SET_SELECTED_SLOT_ID, id);


export const bookSlotRequest = (slot: Slot) =>
    action(ACTION_TYPES.BOOK_SLOT_REQUEST, slot);


export const bookSlotRequestSuccess = () =>
    action(ACTION_TYPES.BOOK_SLOT_REQUEST_SUCCESS);


export const bookSlotRequestFail = () =>
    action(ACTION_TYPES.BOOK_SLOT_REQUEST_FAIL);


export const setSelectedDate = (selectedDate: Moment) =>
    action(ACTION_TYPES.SET_SELECTED_DATE, selectedDate);


export const setSelectedDayToNextDay = () =>
    action(ACTION_TYPES.SELECTED_DATE_ADD_ONE);


export const setSelectedDateToPreviousDay = () =>
    action(ACTION_TYPES.SELECTED_DATE_SUBTRACT_ONE);


export const setSelectedDateToToday = () =>
    action(ACTION_TYPES.SELECTED_DATE_TODAY);


export const currentCartRequest = (companyId: number) =>
    action(ACTION_TYPES.CURRENT_CART_REQUEST, companyId);


export const currentCartRequestSuccess = () =>
    action(ACTION_TYPES.CURRENT_CART_REQUEST_SUCCESS);


export const currentCartRequestFail = (apiError: ApiBaseError) =>
    action(ACTION_TYPES.CURRENT_CART_REQUEST_FAIL, apiError);


export const deleteAppointmentRequest = (id: number) =>
    action(ACTION_TYPES.DELETE_APPOINTMENT_REQUEST, id);

export const deleteAppointmentRequestSuccess = () =>
    action(ACTION_TYPES.CURRENT_CART_REQUEST_SUCCESS);

export const deleteAppointmentRequestFail = (error: ApiBaseError) =>
    action(ACTION_TYPES.CURRENT_CART_REQUEST_SUCCESS, error);


export const setCurrentRequest = (request: RequestModel) =>
    action(ACTION_TYPES.SET_CURRENT_REQUEST, request);
