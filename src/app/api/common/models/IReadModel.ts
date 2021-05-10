export interface IReadModel {
  id: number | null;
  name: string;
}

export function modelId(model: IReadModel) {
  if (model) {
    return model.id;
  }
  return null;
}

