import { all, fork } from 'redux-saga/effects'
import {authSaga} from './auth';
import {companiesSaga} from './companies';


export function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(companiesSaga)
    ])
}
