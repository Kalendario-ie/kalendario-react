import {adminServiceClient, Service} from 'src/app/api/services';
import {kCreateBaseStore} from 'src/app/store/admin/common/adapter';

export const storeName = 'adminServices';

const {
    actions,
    adapter,
    reducer,
    sagas,
    selectors
} = kCreateBaseStore<Service>(storeName, adminServiceClient, (state) => state.adminServices);

export {reducer as serviceReducer}
export {actions as serviceActions}
export {adapter as serviceAdapter}
export {selectors as serviceSelectors}
export {sagas as adminServiceSaga}

