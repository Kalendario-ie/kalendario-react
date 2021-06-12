import {Person} from 'src/app/api/common/models';
import {Schedule} from 'src/app/api/schedule';


export interface Employee extends Person {
    id: number;
    private: boolean;
    firstName: string;
    lastName: string;
    name: string;
    email: string;
    phone: string;
    schedule: number;
    instagram: string;
    photoUrl: string;
    bio: string;
    services: number[];
}


export interface UserEmployee extends Person {
    id: number;
    private: boolean;
    firstName: string;
    lastName: string;
    name: string;
    email: string;
    phone: string;
    schedule: Schedule;
    instagram: string;
    photoUrl: string;
    bio: string;
    services: number[];
}

