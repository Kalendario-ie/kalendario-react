import {RootState} from 'src/app/store/root-state';
import {ApiValidationError} from 'src/app/api/common/api-errors';
import {User} from 'src/app/api/users';


export const selectLoggedIn: (rootState: RootState) => boolean =
    (rootState) => rootState.auth.loggedIn;

export const selectApiError: (rootState: RootState) => ApiValidationError | null =
    (rootState) => rootState.auth.apiError;

export const selectUser: (rootState: RootState) => User | null =
    (rootState) => rootState.auth.user;
