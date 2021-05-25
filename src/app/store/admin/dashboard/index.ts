import {createSlice} from '@reduxjs/toolkit';
import moment from 'moment';
import {PayloadAction} from 'typesafe-actions';


interface AdminDashboardState {
    currentDate: string;
    selectedPanelId: number | null,
}

const initialState: AdminDashboardState = {
    currentDate: moment.utc().startOf('day').toISOString(),
    selectedPanelId: null
}

const slice = createSlice(
    {
        name: 'adminDashboard',
        initialState,
        reducers: {
            setCurrentDate: (state, action: PayloadAction<any, string>) => {
                state.currentDate = action.payload;
            },
            setSelectedPanelId: (state, action: PayloadAction<any, number>) => {
                state.selectedPanelId = action.payload;
            }
        }
    }
)

const {reducer, actions} = slice;

export {reducer as adminDashboardReducer};
export {actions as adminDashboardActions};
