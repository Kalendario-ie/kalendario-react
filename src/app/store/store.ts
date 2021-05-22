import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import {customerReducer} from 'src/app/store/admin/customers';
import {employeeReducer} from 'src/app/store/admin/employees';
import {scheduleReducer} from 'src/app/store/admin/schedules';
import {serviceCategoriesReducer} from 'src/app/store/admin/serviceCategories';
import {authReducer} from 'src/app/store/auth';
import {companiesReducer} from 'src/app/store/companies';
import {uiReducer} from 'src/app/store/ui';
import {usersReducer} from 'src/app/store/users';
import {rootSaga} from './root-saga';
import {serviceReducer} from './admin/services';
import {configureStore} from '@reduxjs/toolkit'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer,
        ui: uiReducer,
        companies: companiesReducer,
        adminServices: serviceReducer,
        adminServiceCategories: serviceCategoriesReducer,
        adminEmployees: employeeReducer,
        adminCustomers: customerReducer,
        adminSchedules: scheduleReducer,
    },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

