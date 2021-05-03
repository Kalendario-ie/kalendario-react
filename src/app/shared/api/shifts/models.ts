import {TimeOfDay} from '../common/models/time-of-day';

export class TimeFrame {
    start: TimeOfDay;
    end: TimeOfDay;
    name: string;

    constructor(start: string, end: string) {
        this.start = TimeOfDay.fromString(start);
        this.end = TimeOfDay.fromString(end);
        this.name = this.start.toString() + ' - ' + this.end.toString();
    }

    static clone(timeFrame: TimeFrame): TimeFrame {
        return new TimeFrame(timeFrame.start.toISOString(), timeFrame.end.toISOString());
    }
}

export class Shift implements IShift {
    static modelType = 'shift';
    frames: TimeFrame[];
    name: string;

    static toWriteModel(shift: IShift): IShiftWriteModel {
        return {
            frames: shift.frames.map(f => ({start: f.start.toISOString(), end: f.end.toISOString()}))
        };
    }

    static clone(shift: IShift): Shift {
        const result = new Shift(shift);
        result.name = shift.name;
        result.frames = shift.frames.map(f => TimeFrame.clone(f));
        return result;
    }

    static fromJs(data?: any): Shift {
        data = typeof data === 'object' ? data : {};
        return new Shift(data);
    }

    constructor(data: any) {
        this.frames = data?.frames ? data.frames.map((f: any) => new TimeFrame(f.start, f.end)) : [];
        this.name = this.frames.length > 0 ? this.frames.map(f => f.name).reduce(((p, c) => p + c)) : '';
    }
}

export interface IShift {
    frames: TimeFrame[];
    name: string;
}

export interface IShiftWriteModel {
    frames: { start: string, end: string }[];
}
