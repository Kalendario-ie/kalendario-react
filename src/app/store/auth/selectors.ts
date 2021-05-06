import {RootState} from '../root-state';


export const selectLoggedIn: (rootState: RootState) => boolean = (rootState) => rootState.auth.loggedIn;
