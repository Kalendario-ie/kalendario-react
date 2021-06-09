import {SocialAccount} from 'src/app/api/auth/models';
import {RegisterRequest} from 'src/app/api/auth/requests';
import {stringToMoment} from 'src/app/shared/util/moment-helpers';

export function parseSocial(item: any): SocialAccount {
    return {
        ...item,
        lastLogin: stringToMoment(item.lastLogin),
        dateJoined: stringToMoment(item.dateJoined)
    };
}


export function parseRegisterRequest(): RegisterRequest {
    return {email: '', firstName: '', lastName: '', password1: '', password2: ''}
}
