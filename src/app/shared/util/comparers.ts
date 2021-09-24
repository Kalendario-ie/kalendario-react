import {IReadModel} from 'src/app/api/common/models';


export const compareByName = (a: IReadModel, b: IReadModel): number => {
    return a.name.localeCompare(b.name);
}
