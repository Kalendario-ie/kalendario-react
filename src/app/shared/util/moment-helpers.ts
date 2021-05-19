import moment, {Moment} from 'moment';

export function validOrToday(date: string): Moment {
    const result = stringToMoment(date)
    return result.isValid() ? result : stringToMoment(undefined);
}

export function stringToMoment(value: string | Date | undefined): Moment {
    return moment.utc(value);
}

export function momentToIso(value: Moment): string {
    return value.toISOString();
}
