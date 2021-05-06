import {Reducer} from 'redux';

export interface AuthState {
    loggedIn: boolean;
    loading: boolean;
}

const initialState: AuthState = {
    loggedIn: false,
    loading: false
}

const reducer: Reducer<AuthState> = (state = initialState, {type, payload}) => {
    switch (type) {
        default:
            return {...state}
    }
}

export {reducer as authReducer};
