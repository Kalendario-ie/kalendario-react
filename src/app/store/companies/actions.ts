import {ACTION_TYPES} from './types';
import {action} from 'typesafe-actions';
import {ApiBaseError} from '../../api/common/api-errors';
import {CompanyDetails} from '../../api/companies';

export const companyDetailsRequest = (companyName: string) =>
    action(ACTION_TYPES.COMPANY_DETAILS_REQUEST, companyName);


export const companyDetailsRequestSuccess = (company: CompanyDetails) =>
    action(ACTION_TYPES.COMPANY_DETAILS_REQUEST_SUCCESS, company);


export const companyDetailsRequestFail = (apiError: ApiBaseError) =>
    action(ACTION_TYPES.COMPANY_DETAILS_REQUEST_FAIL, apiError);

