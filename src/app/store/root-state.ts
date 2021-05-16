import {UsersState} from './users';
import {AuthState} from './auth';
import {CompaniesState} from './companies';

export interface RootState {
    auth: AuthState;
    users: UsersState,
    companies: CompaniesState;
}

