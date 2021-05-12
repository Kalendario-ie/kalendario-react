import moment from 'moment/moment';
import {Reducer} from 'redux';
import {ApiValidationError} from '../../api/common/api-errors';
import {CompanyDetails, Slot} from '../../api/companies';
import {ACTION_TYPES} from './types';
import {Moment} from 'moment';

export interface CompaniesState {
    apiError: ApiValidationError | null;
    company: CompanyDetails | null;
    selectedServiceId: number | null;
    slots: {[key: string]: Slot[]} | null;
    selectedSlotId: number | null;
    selectedDate: Moment;
}

const initialState: CompaniesState = {
    apiError: null,
    company: null,
    selectedServiceId: null,
    slots: null,
    selectedSlotId: null,
    selectedDate: moment.utc().startOf('day')
}

const reducer: Reducer<CompaniesState> = (state = initialState, {type, payload}) => {
    switch (type) {
        case ACTION_TYPES.COMPANY_DETAILS_REQUEST:
            return {...state, apiError: null}
        case ACTION_TYPES.COMPANY_DETAILS_REQUEST_SUCCESS:
            return {...state, company: payload}
        case ACTION_TYPES.SET_SELECTED_SERVICE_ID:
            return {...state, selectedServiceId: payload}
        case ACTION_TYPES.SLOTS_REQUEST_SUCCESS:
            return {...state, slots: payload}
        case ACTION_TYPES.SLOTS_REQUEST_FAIL:
            return {...state, slots: null}
        case ACTION_TYPES.SET_SELECTED_SLOT_ID:
            return {...state, selectedSlotId: payload}
        case ACTION_TYPES.SET_SELECTED_DATE:
            return {...state, selectedDate: payload}
        default:
            return {...state}
    }
}

export {reducer as companiesReducer};
