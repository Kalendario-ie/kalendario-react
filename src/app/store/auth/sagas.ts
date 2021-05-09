import { call, put, takeEvery } from 'redux-saga/effects'
import authApi from '../../shared/api/auth/clients';
import {LoginRequest} from '../../shared/api/auth/requests';
import {ACTION_TYPES} from './types';
import {loginRequestFail, loginRequestSuccess} from './actions';

const apiClient = authApi();

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* login(action: { type: string, payload: LoginRequest }) {
    try {
        // @ts-ignore
        const user = yield call(apiClient.login, action.payload);
        yield put(loginRequestSuccess(user));
    } catch (error) {
        yield put(loginRequestFail(error));
    }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export function* authSaga() {
    yield takeEvery(ACTION_TYPES.LOGIN_REQUEST, login);
}
