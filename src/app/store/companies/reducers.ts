import {Reducer} from 'redux';
import {ApiValidationError} from '../../api/common/api-errors';
import {CompanyDetails} from '../../api/companies';
import {ACTION_TYPES} from './types';

export interface CompaniesState {
    apiError: ApiValidationError | null;
    company: CompanyDetails | null;
}

const initialState: CompaniesState = {
    apiError: null,
    company: null
}

const reducer: Reducer<CompaniesState> = (state = initialState, {type, payload}) => {
    switch (type) {
        case ACTION_TYPES.COMPANY_DETAILS_REQUEST:
            return {...state, apiError: null}
        case ACTION_TYPES.COMPANY_DETAILS_REQUEST_SUCCESS:
            return {...state, company: payload}
        default:
            return {...state}
    }
}

export {reducer as companiesReducer};
