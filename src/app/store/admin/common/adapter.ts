import {
    createAction,
    createEntityAdapter,
    createSelector,
    createSlice,
    EntitySelectors,
    EntityState
} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {call, put, select, takeEvery} from 'redux-saga/effects';
import {ApiBaseError} from 'src/app/api/common/api-errors';
import {ApiListResult} from 'src/app/api/common/api-results';
import {BaseModelRequest} from 'src/app/api/common/clients/base-django-api';
import {IReadModel} from 'src/app/api/common/models';


interface BaseState<TEntity> extends EntityState<TEntity> {
    isInitialized: boolean;
    apiError: ApiBaseError;
}

export interface BaseSelectors extends EntitySelectors<IReadModel, any> {
    selectIsInitialized: (state: any) => boolean;
    selectApiError: (state:any) => ApiBaseError;
}

export interface PatchActionPayload { id: number, entity: any }
export interface CreateActionPayload { entity: any }

export function kCreateBaseStore<TEntity extends IReadModel>(
    sliceName: string,
    client: BaseModelRequest<TEntity>,
    selector: (state: any) => BaseState<TEntity>
) {

    const adapter = createEntityAdapter<TEntity>({
        selectId: (entity) => entity.id,
        sortComparer: (a, b) => a.name.localeCompare(b.name),
    })

    const customActions = {
        initializeStore: createAction<void>(`${sliceName}/initializeStore`),
        fetchEntities: createAction<object>(`${sliceName}/fetchEntities`),
        createAction: createAction<CreateActionPayload>(`${sliceName}/createAction`),
        patchEntity: createAction<PatchActionPayload>(`${sliceName}/patchEntity`),
        deleteEntity: createAction<number>(`${sliceName}/deleteEntity`),
    }

    const slice = createSlice({
        name: sliceName,
        initialState: adapter.getInitialState({
            isInitialized: false,
            apiError: null
        }),
        reducers: {
            // @ts-ignore
            addOne: adapter.addOne,
            // @ts-ignore
            addMany: adapter.addMany,
            // @ts-ignore
            upsertMany: adapter.upsertMany,
            // @ts-ignore
            upsertOne: adapter.upsertOne,
            // @ts-ignore
            removeOne: adapter.removeOne,
            setInitialized: (state, action) => {
                state.isInitialized = true
            },
            setApiError: (state, action) => {
                state.apiError = action.payload
            },
        }
    });

    const actions = {
        reducerActions: {...slice.actions},
        ...customActions
    }

    const adapterSelectors = adapter.getSelectors(selector);
    const selectors = {
        ...adapterSelectors,
        selectByIds: (ids: number[]) => createSelector(
            adapterSelectors.selectEntities,
            (entities) => ids.map(id => entities[id]!).filter(service => !!service)
        ),
        selectIsInitialized: createSelector(selector, store => store.isInitialized),
        selectApiError: createSelector(selector, store => store.apiError)
    }

    function* initializeStore(action: { type: string, payload: {} }) {
        const isInitialized: boolean = yield select(selectors.selectIsInitialized);
        if (isInitialized) return;
        yield put(actions.fetchEntities(action.payload))
    }

    function* fetchEntities(action: { type: string, payload: object }) {
        try {
            const result: ApiListResult<TEntity> = yield call(client.get, action.payload);
            yield put(actions.reducerActions.upsertMany(result.results));
        } catch (error) {
            yield put(actions.reducerActions.setApiError(error));
        }
    }

    function* createEntity(action: { type: string, payload: CreateActionPayload }) {
        try {
            const entity: TEntity = yield call(client.post, action.payload.entity);
            yield put(actions.reducerActions.upsertOne(entity));
            yield put(actions.reducerActions.setApiError(null));
        } catch (error) {
            yield put(actions.reducerActions.setApiError(error));
        }
    }

    function* patchEntity(action: { type: string, payload: PatchActionPayload }) {
        try {
            const entity: TEntity = yield call(client.patch, action.payload.id, action.payload.entity);
            yield put(actions.reducerActions.upsertOne(entity));
            yield put(actions.reducerActions.setApiError(null));
        } catch (error) {
            yield put(actions.reducerActions.setApiError(error));
        }
    }

    function* deleteEntity(action: { type: string, payload: number }) {
        try {
            const result: AxiosResponse = yield call(client.delete, action.payload);
            yield put(actions.reducerActions.removeOne(action.payload));
            yield put(actions.reducerActions.setApiError(null));
        } catch (error) {
            yield put(actions.reducerActions.setApiError(error));
        }
    }

    function* sagas() {
        yield takeEvery(actions.initializeStore.type, initializeStore);
        yield takeEvery(actions.fetchEntities.type, fetchEntities);
        yield takeEvery(actions.createAction.type, createEntity);
        yield takeEvery(actions.patchEntity.type, patchEntity);
        yield takeEvery(actions.deleteEntity.type, deleteEntity);
    }

    return {
        actions,
        adapter,
        reducer: slice.reducer,
        sagas,
        selectors
    }
}
