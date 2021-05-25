import {createSelector} from '@reduxjs/toolkit';
import moment from 'moment';
import {RootState} from 'src/app/store/store';


const baseSelector = (state: RootState) => state.adminDashboard;

export const selectCurrentDate = createSelector(
    baseSelector,
    store => moment.utc(store.currentDate)
)

export const selectSelectedPanelId = createSelector(
    baseSelector,
    store => store.selectedPanelId
)
