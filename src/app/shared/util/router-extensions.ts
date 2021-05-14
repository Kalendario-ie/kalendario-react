import {useHistory, useLocation} from 'react-router-dom';

export function useQueryParams(): { [key: string]: string } {
    const params = new URLSearchParams(useLocation().search);
    const result: { [key: string]: string } = {};
    params.forEach(((value, key) => result[key] = value));
    return result;
}

export function useKHistory() {
    const history = useHistory();
    const push = (value: string, params?: Record<string, string | number>) => history.push(`${value}${createQueryString(params)}`);
    return {...history, push}
}

function createQueryString(params?: Record<string, string | number>): string {
    if (!params) return '';
    const url = Object.keys(params)
        .reduce((prev, cur, i) => {
            return `${prev}${i === 0 ? '?' : '&'}${cur}=${params[cur]}`
        }, '');
    return encodeURI(url);
}
