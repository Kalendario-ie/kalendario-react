import {PermissionModels} from '../common/permissions';
import {IReadModel} from '../common/models/IReadModel';
import {TimeOfDay} from '../common/models/time-of-day';


export class Service implements IReadModel {
  static modelType = PermissionModels.service;
  id: number | null = 0;
  private = false;
  category: number | null = null;
  name = '';
  duration: TimeOfDay = TimeOfDay.zero();
  color = '#FFFFFF';
  description = '';
  cost = 0;
  isFrom = false;
  price = '';

  static fromJs(data: any): Service {
    data = typeof data === 'object' ? data : {};
    const result = new Service();
    if (data) {
      result.id = data.id;
      result.private = data.private;
      result.name = data.name;
      result.duration = data.duration ? TimeOfDay.fromString(data.duration) : TimeOfDay.zero();
      result.description = data.description;
      result.color = data.color;
      result.cost = data.cost;
      result.isFrom = data.isFrom;
      result.price = data.price;
      result.category = data.category;
    }
    return result;
  }

  static CreateModel(): Service {
    const result = new Service();
    result.id = null;
    result.private = false;
    result.name = '';
    result.duration = TimeOfDay.fromString('00:00');
    result.description = '';
    result.color = '#FFFFFF';
    result.cost = 0;
    result.isFrom = false;
    result.category = null;
    return result;
  }
}

export interface IServiceWriteModel {
  id: number | null;
  private: boolean;
  category: number | null;
  name: string;
  duration: string;
  cost: number;
  isFrom: boolean;
  description: string;
  color: string;
}

export class ServiceCategory implements IReadModel {
  static modelType = 'serviceCategory';
  id = 0;
  name = '';
  color = '#FFFFFF';

  static fromJs(data: any): ServiceCategory {
    data = typeof data === 'object' ? data : {};
    const result = new ServiceCategory();
    result.init(data);
    return result;
  }

  static otherCategory(): ServiceCategory {
    const result = new ServiceCategory();
    result.init({id: null, name: 'Other'});
    return result;
  }

  init(data: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.color = data.color;
    }
  }
}
