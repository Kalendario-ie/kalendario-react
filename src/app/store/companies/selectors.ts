import moment, {Moment} from 'moment';
import {RequestModel} from 'src/app/api/requests';
import {SlotDict} from 'src/app/store/companies/reducers';
import {RootState} from '../root-state';
import {CompanyDetails} from '../../api/companies';
import { createSelector } from '@reduxjs/toolkit';


export const selectCompany: (rootState: RootState) => CompanyDetails | null =
    (rootState) => rootState.companies.company;


export const selectSlots: (rootState: RootState) => SlotDict =
    (rootState) => rootState.companies.slots;


export const selectSelectedSlotId: (rootState: RootState) => number | null =
    (rootState) => rootState.companies.selectedSlotId;



export const selectSelectedDate: (rootState: RootState) => Moment =
    (rootState) => moment.utc(rootState.companies.selectedDate);


export const selectCurrentRequest: (rootState: RootState) => RequestModel | null =
    (rootState) => rootState.companies.currentRequest;



export const selectSelectedServiceId: (rootState: RootState) => number | null =
    (rootState) => rootState.companies.selectedServiceId;


const selectServices = createSelector(
    [selectCompany],
    (company) =>
        company?.services
)


export const selectService = createSelector(
    [selectServices, selectSelectedServiceId],
    (services, id) =>
        services && services.find(service => service.id === id)
)

