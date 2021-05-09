import {RootState} from '../root-state';
import {ApiValidationError} from '../../shared/api/common/api-errors';
import {User} from '../../shared/api/users/models';


export const selectLoggedIn: (rootState: RootState) => boolean =
    (rootState) => rootState.auth.loggedIn;

export const selectApiError: (rootState: RootState) => ApiValidationError | null =
    (rootState) => rootState.auth.apiError;

export const selectUser: (rootState: RootState) => User | null =
    (rootState) => rootState.auth.user;
