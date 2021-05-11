import {Moment} from 'moment';
import {call, put, takeEvery, select} from 'redux-saga/effects'
import {selectDateFrom, selectDateTo, selectSelectedServiceId, selectService} from 'src/app/store/companies/selectors';
import {ACTION_TYPES} from './types';
import {
    companyDetailsRequestFail,
    companyDetailsRequestSuccess,
    slotsRequest,
    slotsRequestSuccess
} from './actions';
import {companyClient, CompanyDetails, Slot, SlotRequestParams} from 'src/app/api/companies';

const apiClient = companyClient;

function* companyDetailsRequestSideEffect(action: { type: string, payload: string }) {
    try {
        const company: CompanyDetails = yield call(apiClient.fromName, action.payload);
        yield put(companyDetailsRequestSuccess(company));
    } catch (error) {
        yield put(companyDetailsRequestFail(error));
    }
}

function* requestSlotOnServiceChange(action: { type: string, payload: number }) {
    const start: Moment = yield select(selectDateFrom);
    const end: Moment = yield select(selectDateTo);
    const service: number = yield select(selectSelectedServiceId);
    yield put(slotsRequest({start, end, service}));
}

function* slotsRequestSideEffect(action: { type: string, payload: SlotRequestParams }) {
    try {
        const slots: Slot[] = yield call(apiClient.slots, action.payload);
        yield put(slotsRequestSuccess(slots));
    } catch (error) {
        yield put(companyDetailsRequestFail(error));
    }
}

export function* companiesSaga() {
    yield takeEvery(ACTION_TYPES.COMPANY_DETAILS_REQUEST, companyDetailsRequestSideEffect);
    yield takeEvery(ACTION_TYPES.SET_SELECTED_SERVICE_ID, requestSlotOnServiceChange);
    yield takeEvery(ACTION_TYPES.SLOTS_REQUEST, slotsRequestSideEffect);
}
