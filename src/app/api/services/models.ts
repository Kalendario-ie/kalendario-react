import {IReadModel} from '../common/models/IReadModel';
import {TimeOfDay} from '../common/models/time-of-day';


export interface Service extends IReadModel {
    private: boolean;
    category: number | null;
    name: string;
    duration: TimeOfDay;
    color: string;
    description: string;
    cost: number;
    isFrom: boolean;
    price: string;
}

export interface ServiceCategory extends IReadModel {
    id: number;
    name: string;
    color?: string;
}

export const otherCategory: ServiceCategory = {id: 0, name: 'Other'}
