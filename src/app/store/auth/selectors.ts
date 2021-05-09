import {RootState} from '../root-state';
import {ApiValidationError} from '../../shared/api/common/api-errors';


export const selectLoggedIn: (rootState: RootState) => boolean =
    (rootState) => rootState.auth.loggedIn;

export const selectApiError: (rootState: RootState) => ApiValidationError | null =
    (rootState) => rootState.auth.apiError;
