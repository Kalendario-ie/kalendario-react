import {applyMiddleware, compose, createStore, Store} from 'redux';
import {rootReducer} from './root-reducer';
import {RootState} from './root-state';
import loggerMiddleware from './middleware/logger';

export let store: Store<RootState>;

export function configureStore() {
    store = buildStore();
}

export function buildStore(initialState?: any): Store<RootState> {

    const middlewareEnhancer = applyMiddleware(loggerMiddleware);
    const composedEnhancers = compose(middlewareEnhancer)


    return createStore(
        rootReducer,
        undefined,
        composedEnhancers
    )
}
