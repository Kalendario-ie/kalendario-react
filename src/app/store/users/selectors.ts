import {Appointment} from 'src/app/api/appointments';
import {RootState} from 'src/app/store/root-state';


export const selectEvents: (rootState: RootState) => Appointment[] | null =
    (rootState) => rootState.users.events


export const selectStart: (rootState: RootState) => string | null =
    (rootState) => rootState.users.start


export const selectEnd: (rootState: RootState) => string | null =
    (rootState) => rootState.users.end


export const selectSelectedEvent: (rootState: RootState) => Appointment | null =
    (rootState) => rootState.users.selectedEvent
