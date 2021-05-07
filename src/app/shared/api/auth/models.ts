import * as moment from 'moment';
import {Moment} from 'moment';

export interface ISocialAccount {
    id: number;
    provider: SocialProvider;
    uid: string;
    lastLogin: Moment;
    dateJoined: Moment;
}

export function parseSocial(item: any): ISocialAccount {
    return {
        id: item.id,
        provider: item.provider,
        uid: item.uid,
        lastLogin: moment.utc(item.lastLogin),
        dateJoined: moment.utc(item.dateJoined)
    };
}

type SocialProvider = 'facebook';


export interface IChangePassword {
    oldPassword: string;
    newPassword1: string;
    newPassword2: string;
}

export interface ResetPassword {
    uid: string;
    token: string;
    newPassword1: string;
    newPassword2: string;
}

