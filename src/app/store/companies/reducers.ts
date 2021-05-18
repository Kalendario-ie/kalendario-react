import moment from 'moment/moment';
import {Reducer} from 'redux';
import {RequestModel} from 'src/app/api/requests';
import {ApiValidationError} from '../../api/common/api-errors';
import {CompanyDetails, Slot} from '../../api/companies';
import {ACTION_TYPES} from './types';

const ownerId = process.env.REACT_APP_OWNER_ID || null;

export interface SlotDict {
    [key: string]: Slot[];
}

export interface CompaniesState {
    apiError: ApiValidationError | null;
    company: CompanyDetails | null;
    ownerId: number | null,
    selectedServiceId: number | null;
    slots: SlotDict;
    selectedSlotId: number | null;
    selectedDate: string;
    currentRequest: RequestModel | null;
}

const initialState: CompaniesState = {
    apiError: null,
    company: null,
    ownerId: ownerId ? +ownerId : null,
    selectedServiceId: null,
    slots: {},
    selectedSlotId: null,
    selectedDate: moment.utc().startOf('day').toISOString(),
    currentRequest: null
}

const reducer: Reducer<CompaniesState> = (state = initialState, {type, payload}) => {
    switch (type) {
        case ACTION_TYPES.COMPANY_DETAILS_REQUEST:
            return {...state, apiError: null}
        case ACTION_TYPES.COMPANY_DETAILS_REQUEST_SUCCESS:
            return {...state, company: payload}
        case ACTION_TYPES.SET_SELECTED_SERVICE_ID:
            return {...state, selectedServiceId: payload}
        case ACTION_TYPES.SLOTS_REQUEST:
            return {...state, selectedSlotId: null}
        case ACTION_TYPES.SLOTS_REQUEST_SUCCESS:
            return {...state, slots: payload}
        case ACTION_TYPES.SLOTS_REQUEST_FAIL:
            return {...state, slots: null}
        case ACTION_TYPES.SET_SELECTED_SLOT_ID:
            return {...state, selectedSlotId: payload}
        case ACTION_TYPES.SET_SELECTED_DATE:
            return {...state, selectedDate: payload}
        case ACTION_TYPES.BOOK_SLOT_REQUEST:
            return {...state, selectedSlotId: null, selectedServiceId: null}
        case ACTION_TYPES.SET_CURRENT_REQUEST:
            return {...state, currentRequest: payload}
        default:
            return {...state}
    }
}

export {reducer as companiesReducer};
