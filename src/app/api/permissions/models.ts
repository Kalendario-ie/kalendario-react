export {}
// import {Injectable} from '@angular/core';
// import {Adapter} from '@api/adapter';
// import {IReadModel} from '@api/models/IReadModel';
// import {PermissionModels} from '@api/permissions';
//
// export class Group implements IGroup {
//   static modelType = PermissionModels.group;
//
//   id: number;
//   name: string;
//   permissions: number[];
//
//   static fromJs(data: any): IGroup {
//     data = typeof data === 'object' ? data : {};
//     const result = new Group();
//     result.init(data);
//     return result;
//   }
//
//   init(data: any) {
//     if (data) {
//       this.id = data.id ? data.id : 0;
//       this.name = data.name ? data.name : '';
//       this.permissions = data.permissions ? data.permissions : [];
//     }
//   }
// }
//
// export interface IGroup extends IReadModel {
//   permissions: number[];
//
// }
//
// export interface IGroupWriteModel {
//   id: number;
//   name: string;
//   permissions: number[];
// }
//
// @Injectable({
//   providedIn: 'root'
// })
// export class GroupAdapter implements Adapter<IGroup> {
//   adapt(data: any): IGroup {
//     return Group.fromJs(data);
//   }
// }
// import {Injectable} from '@angular/core';
// import {Adapter} from '@api/adapter';
// import {IReadModel} from '@api/models/IReadModel';
//
// export class Permission implements IReadModel {
//   static modelType = 'permission';
//
//   id: number;
//   name: string;
//   codename: string;
//
//   get type(): string {
//     return this.codename.substr(0, this.codename.indexOf('_'))
//   }
//
//   get model(): string {
//     return this.codename.substring(this.codename.indexOf('_') + 1, this.codename.length)
//   }
//
//   static fromJs(data: any): Permission {
//     data = typeof data === 'object' ? data : {};
//     const result = new Permission();
//     result.init(data);
//     return result;
//   }
//
//   init(data: any) {
//     if (data) {
//       this.id = data.id;
//       this.name = data.name;
//       this.codename = data.codename;
//     }
//   }
// }
//
// export interface IPermissionWriteModel {
//   id: number;
//   name: string;
//   codename: string;
// }
//
// @Injectable({
//   providedIn: 'root'
// })
// export class PermissionAdapter implements Adapter<Permission> {
//   adapt(data: any): Permission {
//     return Permission.fromJs(data);
//   }
// }
