import {IPerson, Person} from '../common/IPerson';

export class Employee extends Person implements IEmployee {
    private;
    schedule;
    instagram;
    // photoUrl: string;
    bio;
    services: number[];

    constructor(data: any) {
        super(data);
        this.private = !!data.private;
        this.schedule = data.schedule ? data.schedule : 0;
        this.instagram = data.instagram ? data.instagram : '';
        // this.photoUrl = data.profileImg ? environment.imageStorage + data.profileImg
        //     : environment.assetUrl + 'img/default-avatar.jpg';
        this.bio = data.bio ? data.bio : '';
        this.services = data.services ? data.services : [];
    }

    static fromJs(data?: any): IEmployee {
        data = typeof data === 'object' ? data : {};
        return new Employee(data);
    }
}

export interface IEmployee extends IPerson {
    id: number;
    private: boolean;
    firstName: string;
    lastName: string;
    name: string;
    email: string;
    phone: string;
    schedule: string;
    instagram: string;
    // photoUrl: string;
    bio: string;
    services: number[];
}

export interface EmployeeWriteModel {
    id: number;
    private: boolean;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    schedule: number;
    instagram: string;
    bio: string;
    services: number[];
}
