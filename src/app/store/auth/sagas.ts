import { call, put, takeEvery } from 'redux-saga/effects'
import {User} from 'src/app/api/users';
import {LoginRequest, authApi, RegisterRequest} from 'src/app/api/auth';
import {ACTION_TYPES} from './types';
import {
    facebookLoginRequestFail,
    facebookLoginRequestSuccess,
    loginRequestFail,
    loginRequestSuccess, registerRequestFail, registerRequestSuccess,
    setUser
} from './actions';


function* requestLogin(action: { type: string, payload: LoginRequest }) {
    try {
        const user: User = yield call(authApi.login, action.payload);
        yield put(loginRequestSuccess());
        yield put(setUser(user));
    } catch (error) {
        yield put(loginRequestFail(error));
    }
}


function* register(action: { type: string, payload: RegisterRequest }) {
    try {
        const user: User = yield call(authApi.register, action.payload);
        yield put(registerRequestSuccess());
        yield put(setUser(user));
    } catch (error) {
        yield put(registerRequestFail(error));
    }
}


function* requestFacebookLogin(action: { type: string, payload: string }) {
    try {
        const user: User = yield call(authApi.authenticateFacebook, action.payload);
        yield put(facebookLoginRequestSuccess());
        yield put(setUser(user));
    } catch (error) {
        yield put(facebookLoginRequestFail(error));
    }
}


export function* authSaga() {
    yield takeEvery(ACTION_TYPES.LOGIN_REQUEST, requestLogin);
    yield takeEvery(ACTION_TYPES.REGISTER_REQUEST, register);
    yield takeEvery(ACTION_TYPES.FACEBOOK_LOGIN_REQUEST, requestFacebookLogin);
}
