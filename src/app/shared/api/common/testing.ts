import {Observable, of} from 'rxjs';
import {ApiListResult} from './api-results';
import {IReadModel} from './models/IReadModel';

export class ReadModelStub implements IReadModel {
  id: number;
  name: string;

  constructor(data: any) {
      this.id = data.id;
      this.name = data.name;
  }

  writeModel() {
    return undefined;
  }
}

const READ_MODEL = new ReadModelStub({});

export class TestAdapter {
  adapt(item: any) {
    return READ_MODEL;
  }
}

export class ModelViewSetClientMock{
  get(params: any): Observable<ApiListResult<ReadModelStub>> {
    return of({count: 1, next: '', previous: '', results: [READ_MODEL]});
  }

  post(model: any) {
  }

  detail(id: number, params: any): Observable<ReadModelStub> {
    return of(READ_MODEL);
  }

  patch(id: number, model: any): Observable<ReadModelStub> {
    return of(READ_MODEL);
  }

  delete(id: any): Observable<ReadModelStub> {
    return of(READ_MODEL);
  }
}


export class ReadOnlyModelViewSetClientMock {
  get(params: any): Observable<ApiListResult<ReadModelStub>> {
    return of({count: 1, next: '', previous: '', results: [READ_MODEL]});
  }

  detail(id: number, params: any): Observable<ReadModelStub> {
    return of(READ_MODEL);
  }
}
