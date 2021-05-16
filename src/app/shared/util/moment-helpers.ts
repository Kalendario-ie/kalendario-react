import moment, {Moment} from 'moment';

export function validOrToday(date: string): Moment {
    const result = moment.utc(date)
    return result.isValid() ? result : moment.utc();
}
