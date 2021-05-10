import { call, put, takeEvery } from 'redux-saga/effects'
import {ACTION_TYPES} from './types';
import {companyDetailsRequestFail, companyDetailsRequestSuccess} from './actions';
import {companyClient} from 'src/app/api/companies';

const apiClient = companyClient;

function* companyRequest(action: { type: string, payload: string }) {
    try {
        // @ts-ignore
        const company = yield call(apiClient.fromName, action.payload);
        yield put(companyDetailsRequestSuccess(company));
    } catch (error) {
        yield put(companyDetailsRequestFail(error));
    }
}

export function* companiesSaga() {
    yield takeEvery(ACTION_TYPES.COMPANY_DETAILS_REQUEST, companyRequest);
}
