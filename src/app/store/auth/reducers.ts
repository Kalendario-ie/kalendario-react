import {Reducer} from 'redux';
import {ACTION_TYPES} from './types';
import {User} from '../../api/users/models';
import {ApiValidationError} from '../../api/common/api-errors';

export interface AuthState {
    apiError: ApiValidationError | null;
    loggedIn: boolean;
    loading: boolean;
    user: User | null;
}

const initialState: AuthState = {
    apiError: null,
    loggedIn: false,
    loading: false,
    user: null
}

const reducer: Reducer<AuthState> = (state = initialState, {type, payload}) => {
    switch (type) {
        case ACTION_TYPES.LOGIN_REQUEST:
            return {...state, apiError: null}
        case ACTION_TYPES.LOGIN_REQUEST_SUCCESS:
            return {...state, loggedIn: true, user: payload}
        case ACTION_TYPES.SET_USER:
            return {...state, loggedIn: true, user: payload}
        case ACTION_TYPES.LOGIN_REQUEST_FAIL:
            return {...state, loggedIn: false, apiError: payload}
        default:
            return {...state}
    }
}

export {reducer as authReducer};
