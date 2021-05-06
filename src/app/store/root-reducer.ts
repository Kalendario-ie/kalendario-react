import {RootState} from './root-state';
import {AnyAction, combineReducers, Reducer} from 'redux';
import {authReducer} from './auth/reducers';


const appReducer = combineReducers<RootState>({
   auth: authReducer
});

export const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    return appReducer(state, action);
}
