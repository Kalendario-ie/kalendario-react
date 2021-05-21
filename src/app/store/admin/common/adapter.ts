import {createAction, createEntityAdapter, createSelector, createSlice, EntityState} from '@reduxjs/toolkit';
import {call, put, select, takeEvery} from 'redux-saga/effects';
import {ApiListResult} from 'src/app/api/common/api-results';
import {BaseModelRequest} from 'src/app/api/common/clients/base-django-api';
import {IReadModel} from 'src/app/api/common/models';


interface AugmentedEntityState<TEntity> extends EntityState<TEntity> {
    isInitialized: boolean;
}

export function kCreateBaseStore<TEntity extends IReadModel>(
    sliceName: string,
    client: BaseModelRequest<TEntity>,
    selector: (state: any) => AugmentedEntityState<TEntity>
) {

    const adapter = createEntityAdapter<TEntity>({
        selectId: (entity) => entity.id,
        sortComparer: (a, b) => a.name.localeCompare(b.name),
    })

    const customActions = {
        initializeStore: createAction<void>(`${sliceName}/initializeStore`),
    }

    const slice = createSlice({
        name: sliceName,
        initialState: adapter.getInitialState({
            isInitialized: false,
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
            setInitialized: (state, action) => {
                state.isInitialized = true
            }
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
        selectIsInitialized: createSelector(selector, store => store.isInitialized)
    }

    function* requestAllServices(action: { type: string, payload: {} }) {
        const isInitialized: boolean = yield select(selectors.selectIsInitialized);
        if (isInitialized) return;
        try {
            const result: ApiListResult<TEntity> = yield call(client.get, action.payload);
            yield put(actions.reducerActions.upsertMany(result.results));
            yield put(actions.reducerActions.setInitialized(null));
        } catch (error) {
        }
    }

    function* sagas() {
        yield takeEvery(actions.initializeStore.type, requestAllServices);
    }

    return {
        actions,
        adapter,
        reducer: slice.reducer,
        sagas,
        selectors
    }
}
