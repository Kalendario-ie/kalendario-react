import { call, put, takeEvery } from 'redux-saga/effects'
import {User} from 'src/app/api/users';
import authApi from '../../api/auth/clients';
import {LoginRequest} from '../../api/auth/requests';
import {ACTION_TYPES} from './types';
import {loginRequestFail, loginRequestSuccess, setUser} from './actions';

const apiClient = authApi();

function* requestLogin(action: { type: string, payload: LoginRequest }) {
    try {
        const user: User = yield call(apiClient.login, action.payload);
        yield put(loginRequestSuccess());
        yield put(setUser(user));
    } catch (error) {
        yield put(loginRequestFail(error));
    }
}

export function* authSaga() {
    yield takeEvery(ACTION_TYPES.LOGIN_REQUEST, requestLogin);
}
