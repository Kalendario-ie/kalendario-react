import {adminEmployeeClient} from 'src/app/api/employees';
import {kCreateBaseStore} from 'src/app/store/admin/common/adapter';

const storeName = 'adminEmployees';

const {
    actions,
    adapter,
    reducer,
    sagas,
    selectors
} = kCreateBaseStore(storeName, adminEmployeeClient, (state) => state.adminEmployees);

export {reducer as employeeReducer}
export {actions as employeeActions}
export {adapter as employeeAdapter}
export {selectors as employeeSelectors}
export {sagas as adminEmployeeSaga}

