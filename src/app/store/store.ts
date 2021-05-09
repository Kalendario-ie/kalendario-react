import {applyMiddleware, compose, createStore, Store} from 'redux';
import {rootReducer} from './root-reducer';
import {RootState} from './root-state';
import loggerMiddleware from './middleware/logger';
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './root-saga';

export let store: Store<RootState>;

export function configureStore() {
    store = buildStore();
}

export function buildStore(initialState?: any): Store<RootState> {

    const sagaMiddleware = createSagaMiddleware()
    const middlewareEnhancer = applyMiddleware(loggerMiddleware, sagaMiddleware);
    const composedEnhancers = compose(middlewareEnhancer)


    const store = createStore(
        rootReducer,
        undefined,
        composedEnhancers
    );

    sagaMiddleware.run(rootSaga)

    return store;
}
