import {Moment} from 'moment';
import {Schedule} from 'src/app/api/schedule/models';
import {shiftParser} from 'src/app/api/shifts';

export function scheduleParser(data: any): Schedule {
    return {
        id: data.id,
        name: data.name,
        mon: shiftParser(data.mon),
        tue: shiftParser(data.tue),
        wed: shiftParser(data.wed),
        thu: shiftParser(data.thu),
        fri: shiftParser(data.fri),
        sat: shiftParser(data.sat),
        sun: shiftParser(data.sun),
        shifts: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    }
}

export function getShift(schedule: Schedule, date: Moment) {
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
