import baseModelRequest from 'src/app/api/common/clients/base-django-api';
import {User} from 'src/app/api/users/models';
import {userParser} from 'src/app/api/users/parsers';
import {ChangeUserPasswordRequest} from 'src/app/api/users/requests';
import baseApiAxios from 'src/app/api/common/clients/base-api';

const baseUrl = 'core/users/';

export const adminUserClient = {
    ...baseModelRequest(baseUrl, userParser),
    changePassword(id: number, model: ChangeUserPasswordRequest): Promise<User> {
        return baseApiAxios
            .patch<User>(baseUrl + id + '/changePassword/', model)
            .then(data => userParser(data.data));
    }
}
