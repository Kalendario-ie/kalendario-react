import moment from 'moment';

export const adminDashboard = 'adminDashboard';

export interface AdminDashboardState {
    currentDate: string;
    selectedPanelId: number | null,
}

export const initialState: AdminDashboardState = {
    currentDate: moment.utc().startOf('day').toISOString(),
    selectedPanelId: null
}
