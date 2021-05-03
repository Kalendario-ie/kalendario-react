import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import Axios from 'axios-observable';
import baseModelRequest from '../common/common-api';
import {IUser, User} from './models';

const baseUrl = 's';

const userAdminClient = {...baseModelRequest(baseUrl, User.fromJs),
    changePassword: (id: number, model: UserPasswordWriteModel): Observable<IUser> => {
        return Axios
            .patch(baseUrl + id + '/changePassword/', model)
            .pipe(map(User.fromJs));
    }
};

export interface UserPasswordWriteModel {
    userPassword: string;
    password1: string;
    password2: string;
}

export default userAdminClient;
