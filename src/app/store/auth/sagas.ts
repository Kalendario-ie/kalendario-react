import {call, put, takeEvery} from 'redux-saga/effects'
import {authApi, AuthUser, LoginRequest, RegisterRequest} from 'src/app/api/auth';
import {
    facebookLoginRequestFail,
    facebookLoginRequestSuccess,
    loginRequestFail,
    loginRequestSuccess,
    registerRequestFail,
    registerRequestSuccess,
    setUser
} from './actions';
import {ACTION_TYPES} from './types';


function* requestLogin(action: { type: string, payload: LoginRequest }) {
    try {
        const user: AuthUser = yield call(authApi.login, action.payload);
        yield put(loginRequestSuccess());
        yield put(setUser(user));
    } catch (error) {
        yield put(loginRequestFail(error));
    }
}


function* register(action: { type: string, payload: RegisterRequest }) {
    try {
        const user: AuthUser = yield call(authApi.register, action.payload);
        yield put(registerRequestSuccess());
        yield put(setUser(user));
    } catch (error) {
        yield put(registerRequestFail(error));
    }
}


function* requestFacebookLogin(action: { type: string, payload: string }) {
    try {
        const user: AuthUser = yield call(authApi.authenticateFacebook, action.payload);
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
