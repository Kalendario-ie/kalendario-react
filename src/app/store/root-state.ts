import {AuthState} from './auth';
import {CompaniesState} from './companies';

export interface RootState {
    auth: AuthState;
    companies: CompaniesState;
}

