import {uiReducer} from 'src/app/store/ui';
import {usersReducer} from 'src/app/store/users';
import {RootState} from './root-state';
import {AnyAction, combineReducers, Reducer} from 'redux';
import {authReducer} from './auth/reducers';
import {companiesReducer} from './companies';


const appReducer = combineReducers<RootState>({
    ui: uiReducer,
    auth: authReducer,
    companies: companiesReducer,
    users: usersReducer,
});

export const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    return appReducer(state, action);
}
