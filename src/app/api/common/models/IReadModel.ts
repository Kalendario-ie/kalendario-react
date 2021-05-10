export interface IReadModel {
  id: number;
  name: string;
}

export function modelId(model: IReadModel) {
  if (model) {
    return model.id;
  }
  return null;
}

