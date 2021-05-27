import {createAction} from '@reduxjs/toolkit';
import {LoginRequest} from 'src/app/api/auth';
import {ACTION_TYPES} from './types';
import {action} from 'typesafe-actions';
import {User} from 'src/app/api/users';
import {ApiBaseError} from '../../api/common/api-errors';

export const loginRequest = (request: LoginRequest) =>
    action(ACTION_TYPES.LOGIN_REQUEST, request);

export const loginRequestSuccess = () =>
    action(ACTION_TYPES.LOGIN_REQUEST_SUCCESS)

export const loginRequestFail = (error?: ApiBaseError) =>
    action(ACTION_TYPES.LOGIN_REQUEST_FAIL, error)

export const setUser = (user: User | null) =>
    action(ACTION_TYPES.SET_USER, user)

export const setLoadingUser = createAction<boolean>(ACTION_TYPES.SET_LOADING_USER)

export const facebookLoginRequest = (accessToken: string) =>
    action(ACTION_TYPES.FACEBOOK_LOGIN_REQUEST, accessToken);

export const facebookLoginRequestSuccess = () =>
    action(ACTION_TYPES.FACEBOOK_LOGIN_REQUEST_SUCCESS)

export const facebookLoginRequestFail = (error?: ApiBaseError) =>
    action(ACTION_TYPES.FACEBOOK_LOGIN_REQUEST_FAIL, error)
