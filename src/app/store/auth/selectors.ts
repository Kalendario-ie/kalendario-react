import {createSelector} from '@reduxjs/toolkit';
import {ApiValidationError} from 'src/app/api/common/api-errors';
import {User} from 'src/app/api/users';
import {RootState} from 'src/app/store/store';


export const selectLoggedIn: (rootState: RootState) => boolean =
    (rootState) => rootState.auth.loggedIn;

export const selectApiError: (rootState: RootState) => ApiValidationError | null =
    (rootState) => rootState.auth.apiError;

export const selectUser: (rootState: RootState) => User | null =
    (rootState) => rootState.auth.user

export const selectUserEmployee = createSelector(selectUser, user => user?.employee)

export const selectLoadingUser: (rootState: RootState) => boolean =
    (rootState) => rootState.auth.loadingUser;
