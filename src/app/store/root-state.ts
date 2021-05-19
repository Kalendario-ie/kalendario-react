import {UiState} from 'src/app/store/ui';
import {AuthState} from './auth';
import {CompaniesState} from './companies';
import {UsersState} from './users';

export interface RootState {
    ui: UiState
    auth: AuthState;
    users: UsersState,
    companies: CompaniesState;
}

