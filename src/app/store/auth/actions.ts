import {LoginRequest} from '../../shared/api/auth/requests';
import {ACTION_TYPES} from './types';
import {action} from 'typesafe-actions';
import {User} from '../../shared/api/users/models';
import {ApiBaseError} from '../../shared/api/common/api-errors';

export const loginRequest = (request: LoginRequest) =>
    action(ACTION_TYPES.LOGIN_REQUEST, request);

export const loginRequestSuccess = (user: User) =>
    action(ACTION_TYPES.LOGIN_REQUEST_SUCCESS, user)

export const loginRequestFail = (error?: ApiBaseError) =>
    action(ACTION_TYPES.LOGIN_REQUEST_FAIL, error)
