import {RootState} from './root-state';
import {AnyAction, combineReducers, Reducer} from 'redux';
import {authReducer} from './auth/reducers';
import {companiesReducer} from './companies';


const appReducer = combineReducers<RootState>({
    auth: authReducer,
    companies: companiesReducer
});

export const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    return appReducer(state, action);
}