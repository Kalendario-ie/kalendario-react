import moment, {Moment} from 'moment';
import {call, put, takeEvery, select} from 'redux-saga/effects'
import {selectSelectedDate, selectSelectedServiceId} from 'src/app/store/companies/selectors';
import {ACTION_TYPES} from './types';
import {
    companyDetailsRequestFail,
    companyDetailsRequestSuccess,
    setSelectedDate,
    slotsRequest, slotsRequestFail,
    slotsRequestSuccess
} from './actions';
import {companyClient, CompanyDetails, Slot, SlotRequestParams} from 'src/app/api/companies';
import {isMobile} from 'react-device-detect';

const apiClient = companyClient;

function* companyDetailsRequestSideEffect(action: { type: string, payload: string }) {
    try {
        const company: CompanyDetails = yield call(apiClient.fromName, action.payload);
        yield put(companyDetailsRequestSuccess(company));
    } catch (error) {
        yield put(companyDetailsRequestFail(error));
    }
}

function* triggerSlotRequest(action: { type: string, payload: number }) {
    const start: Moment = yield select(selectSelectedDate);

    const end = start.clone().add(isMobile ? 0 : 1, 'day').endOf('day');
    const service: number = yield select(selectSelectedServiceId);
    yield put(slotsRequest({start, end, service}));
}

function* slotsRequestSideEffect(action: { type: string, payload: SlotRequestParams }) {
    try {
        const slots: Slot[] = yield call(apiClient.slots, action.payload);
        yield put(slotsRequestSuccess(slots));
    } catch (error) {
        yield put(slotsRequestFail());
    }
}


function* moveNextDateSideEffect(action: { type: string, payload: number }) {
    const selectedDate: Moment = yield select(selectSelectedDate);
    yield put(setSelectedDate(selectedDate.clone().add(1, 'day')))
}


function* movePreviousDateSideEffect(action: { type: string, payload: number }) {
    const selectedDate: Moment = yield select(selectSelectedDate);
    yield put(setSelectedDate(selectedDate.clone().subtract(1, 'day')))
}

function* selectTodaySideEffect(action: { type: string, payload: number }) {
    yield put(setSelectedDate(moment.utc().startOf('day')));
}


export function* companiesSaga() {
    yield takeEvery(ACTION_TYPES.COMPANY_DETAILS_REQUEST, companyDetailsRequestSideEffect);
    yield takeEvery(ACTION_TYPES.SET_SELECTED_SERVICE_ID, triggerSlotRequest);
    yield takeEvery(ACTION_TYPES.SET_SELECTED_DATE, triggerSlotRequest);
    yield takeEvery(ACTION_TYPES.SLOTS_REQUEST, slotsRequestSideEffect);
    yield takeEvery(ACTION_TYPES.SELECTED_DATE_ADD_ONE, moveNextDateSideEffect);
    yield takeEvery(ACTION_TYPES.SELECTED_DATE_SUBTRACT_ONE, movePreviousDateSideEffect);
    yield takeEvery(ACTION_TYPES.SELECTED_DATE_TODAY, selectTodaySideEffect);
}
