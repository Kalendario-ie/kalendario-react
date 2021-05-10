import {timeFromString, TimeOfDay, timeToString} from '../common/models/time-of-day';

export interface TimeFrame {
    start: TimeOfDay;
    end: TimeOfDay;
    name: string;
}

export interface Shift {
    frames: TimeFrame[];
    name: string;
}




