import {createAction, createEntityAdapter, createSlice, EntityState} from '@reduxjs/toolkit';
import {call, put, takeEvery} from 'redux-saga/effects';
import {ApiListResult} from 'src/app/api/common/api-results';
import {BaseModelRequest} from 'src/app/api/common/clients/base-django-api';
import {IReadModel} from 'src/app/api/common/models';
import {storeName} from 'src/app/store/admin/services';


export function kCreateBaseStore<TEntity extends IReadModel>(
    sliceName: string,
    client: BaseModelRequest<TEntity>,
    selector: (state: any) => EntityState<TEntity>
) {

    const adapter = createEntityAdapter<TEntity>({
        selectId: (entity) => entity.id,
        sortComparer: (a, b) => a.name.localeCompare(b.name),
    })

    const slice = createSlice({
        name: sliceName,
        initialState: adapter.getInitialState(),
        reducers: {
            // @ts-ignore
            addOne: adapter.addOne,
            // @ts-ignore
            addMany: adapter.addMany,
            // @ts-ignore
            upsertMany: adapter.upsertMany,
            // @ts-ignore
            upsertOne: adapter.upsertOne,
        }
    });

    const actions = {
        reducerActions: {...slice.actions},
        initializeStore: createAction<void>(`${storeName}/initializeStore`),
    }

    function* requestAllServices(action: { type: string, payload: {} }) {
        try {
            const result: ApiListResult<TEntity> = yield call(client.get, action.payload);
            yield put({type: actions.reducerActions.upsertMany.type, payload: result.results});
        } catch (error) {
        }
    }

    function* sagas() {
        yield takeEvery(actions.initializeStore.type, requestAllServices);
    }

    const selectors = {
        ...adapter.getSelectors(selector),
    }

    return {
        actions,
        adapter,
        reducer: slice.reducer,
        sagas,
        selectors
    }
}
