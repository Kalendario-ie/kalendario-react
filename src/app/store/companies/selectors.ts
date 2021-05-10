import {RootState} from '../root-state';
import {CompanyDetails} from '../../api/companies';


export const selectCompany: (rootState: RootState) => CompanyDetails | null =
    (rootState) => rootState.companies.company;

