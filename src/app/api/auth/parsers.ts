import {SocialAccount} from 'src/app/api/auth/models';
import {stringToMoment} from 'src/app/shared/util/moment-helpers';

export function parseSocial(item: any): SocialAccount {
    return {
        ...item,
        lastLogin: stringToMoment(item.lastLogin),
        dateJoined: stringToMoment(item.dateJoined)
    };
}
