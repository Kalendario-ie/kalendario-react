import {Moment} from 'moment';
import {User} from '../users/models';

type SocialProvider = 'facebook';

export interface SocialAccount {
    id: number;
    provider: SocialProvider;
    uid: string;
    lastLogin: Moment;
    dateJoined: Moment;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    user: User;
}

export interface RefreshAccessTokenResponse {
    access: string;
    accessTokenExpiration: string;
}

