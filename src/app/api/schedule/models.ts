import {Shift, IShift, IShiftWriteModel} from '../shifts/models';
import {IReadModel} from '../common/models/IReadModel';
import {Moment} from 'moment';
import {PermissionModels} from '../common/permissions';

export class Schedule implements ISchedule {
  static modelType = PermissionModels.schedule;
  id = 0;
  name: string;
  mon: IShift;
  tue: IShift;
  wed: IShift;
  thu: IShift;
  fri: IShift;
  sat: IShift;
  sun: IShift;
  shifts: string[];

  static toWriteModel(schedule: ISchedule): IScheduleWriteModel {
    return {
      id: schedule.id,
      name: schedule.name,
      mon: Shift.toWriteModel(schedule.mon),
      tue: Shift.toWriteModel(schedule.tue),
      wed: Shift.toWriteModel(schedule.wed),
      thu: Shift.toWriteModel(schedule.thu),
      fri: Shift.toWriteModel(schedule.fri),
      sat: Shift.toWriteModel(schedule.sat),
      sun: Shift.toWriteModel(schedule.sun),
    };
  }

  static clone(schedule: ISchedule): Schedule {
    const result = Schedule.fromJs({
      id: schedule.id,
      name: schedule.name,
    });
    result.mon = Shift.clone(schedule.mon);
    result.tue = Shift.clone(schedule.tue);
    result.wed = Shift.clone(schedule.wed);
    result.thu = Shift.clone(schedule.thu);
    result.fri = Shift.clone(schedule.fri);
    result.sat = Shift.clone(schedule.sat);
    result.sun = Shift.clone(schedule.sun);
    return result;
  }

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.mon = Shift.fromJs(data.mon);
    this.tue = Shift.fromJs(data.tue);
    this.wed = Shift.fromJs(data.wed);
    this.thu = Shift.fromJs(data.thu);
    this.fri = Shift.fromJs(data.fri);
    this.sat = Shift.fromJs(data.sat);
    this.sun = Shift.fromJs(data.sun);
    this.shifts = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  }

  static fromJs(data?: any): Schedule {
    data = typeof data === 'object' ? data : {};
    return  new Schedule(data);
  }
}

export function getShift(schedule: ISchedule, date: Moment) {
  switch (date.isoWeekday()) {
    case 1:
      return schedule.mon;
    case 2:
      return schedule.tue;
    case 3:
      return schedule.wed;
    case 4:
      return schedule.thu;
    case 5:
      return schedule.fri;
    case 6:
      return schedule.sat;
    case 7:
      return schedule.sun;
  }
}

export interface ISchedule extends IReadModel {
  mon: IShift;
  tue: IShift;
  wed: IShift;
  thu: IShift;
  fri: IShift;
  sat: IShift;
  sun: IShift;
  shifts: string[];
}

export interface IScheduleWriteModel {
  id: number | null;
  name: string;
  mon: IShiftWriteModel;
  tue: IShiftWriteModel;
  wed: IShiftWriteModel;
  thu: IShiftWriteModel;
  fri: IShiftWriteModel;
  sat: IShiftWriteModel;
  sun: IShiftWriteModel;
}

