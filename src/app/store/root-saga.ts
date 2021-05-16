import { all, fork } from 'redux-saga/effects'
import {userSaga} from 'src/app/store/users';
import {authSaga} from './auth';
import {companiesSaga} from './companies';


export function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(companiesSaga),
        fork(userSaga)
    ])
}
