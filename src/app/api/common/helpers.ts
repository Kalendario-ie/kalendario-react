import * as moment from 'moment';

export function convertMoment(params: {[key: string]: any} = {}): any  {
  const result: {[key: string]: any} = {};
  Object.keys(params).forEach((prop: string) => {
    // @ts-ignore
    if (params[prop] instanceof moment) {
      result[prop] = params[prop].toISOString();
    } else {
      result[prop] = params[prop];
    }
  });
  return result;
}
