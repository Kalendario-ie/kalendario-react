import * as moment from 'moment';
import {Moment} from 'moment';
import {User} from '../users/models';

export interface SocialAccount {
    id: number;
    provider: SocialProvider;
    uid: string;
    lastLogin: Moment;
    dateJoined: Moment;
}

export function parseSocial(item: any): SocialAccount {
    return {
        ...item,
        lastLogin: moment.utc(item.lastLogin),
        dateJoined: moment.utc(item.dateJoined)
    };
}

type SocialProvider = 'facebook';


export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    user: User;
}


export interface RefreshAccessTokenResponse {
    access: string;
    accessTokenExpiration: string;
}

