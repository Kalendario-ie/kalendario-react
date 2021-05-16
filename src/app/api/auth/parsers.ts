import * as moment from 'moment';
import {SocialAccount} from 'src/app/api/auth/models';

export function parseSocial(item: any): SocialAccount {
    return {
        ...item,
        lastLogin: moment.utc(item.lastLogin),
        dateJoined: moment.utc(item.dateJoined)
    };
}
