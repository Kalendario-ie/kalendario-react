import {IReadModel} from './models/IReadModel';

export class Person implements IPerson {
  id;
  firstName;
  lastName;
  name;
  email;
  phone;

  static fromJS(data?: any): Person {
    data = typeof data === 'object' ? data : {};
    return  new Person(data);
  }

  constructor(data: any) {
    if (data) {
      this.id = data.id ? data.id : 0;
      this.firstName = data.firstName ? data.firstName : '';
      this.lastName = data.lastName ? data.lastName : '';
      this.name = data.name ? data.name : '';
      this.email = data.email ? data.email : '';
      this.phone = data.phone ? data.phone : '';
    }
  }
}

export interface IPerson extends IReadModel {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
