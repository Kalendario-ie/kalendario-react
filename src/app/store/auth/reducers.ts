import {Reducer} from 'redux';
import {isLoggedIn} from 'src/app/api/common/session-storage';
import {ACTION_TYPES} from './types';
import {User} from 'src/app/api/users';
import {ApiValidationError} from 'src/app/api/common/api-errors';

export interface AuthState {
    apiError: ApiValidationError | null;
    loggedIn: boolean;
    loadingUser: boolean;
    user: User | null;
}

const initialState: AuthState = {
    apiError: null,
    loggedIn: isLoggedIn(),
    loadingUser: false,
    user: null
}

const reducer: Reducer<AuthState> = (state = initialState, {type, payload}) => {
    switch (type) {
        case ACTION_TYPES.LOGIN_REQUEST:
            return {...state, apiError: null}
        case ACTION_TYPES.SET_USER:
            return {...state, loggedIn: !!payload, user: payload, loadingUser: false}
        case ACTION_TYPES.SET_LOADING_USER:
            return {...state, loadingUser: payload}
        case ACTION_TYPES.LOGIN_REQUEST_FAIL:
            return {...state, loggedIn: false, apiError: payload, loadingUser: false}
        default:
            return {...state}
    }
}

export {reducer as authReducer};
