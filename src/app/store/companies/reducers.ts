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
    slots: Slot[];
    selectedSlotId: number | null;
    datFrom: Moment;
    dateTo: Moment;
}

const initialState: CompaniesState = {
    apiError: null,
    company: null,
    selectedServiceId: null,
    slots: [],
    selectedSlotId: null,
    datFrom: moment.utc().add(1, 'day').startOf('day'),
    dateTo: moment.utc().add(1, 'day').endOf('day')
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
        case ACTION_TYPES.SET_SELECTED_SLOT_ID:
            return {...state, selectedSlotId: payload}
        default:
            return {...state}
    }
}

export {reducer as companiesReducer};
