import {applyMiddleware, createStore, Store} from 'redux';
import {rootReducer} from './root-reducer';
import {RootState} from './root-state';
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './root-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

export let store: Store<RootState>;

export function configureStore() {
    store = buildStore();
}

export function buildStore(initialState?: any): Store<RootState> {

    const sagaMiddleware = createSagaMiddleware()
    const middlewareEnhancer = applyMiddleware(sagaMiddleware);
    const composedEnhancers = composeWithDevTools(middlewareEnhancer)


    const store = createStore(
        rootReducer,
        composedEnhancers
    );

    sagaMiddleware.run(rootSaga)

    return store;
}
