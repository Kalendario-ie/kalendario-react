import {Shift} from '../shifts/models';

export interface Schedule {
    id: 0;
    name: string;
    mon: Shift;
    tue: Shift;
    wed: Shift;
    thu: Shift;
    fri: Shift;
    sat: Shift;
    sun: Shift;
    shifts: string[];
}


