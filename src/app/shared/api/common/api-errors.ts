export class ApiBaseError {
  status: number;
  detail: any;

  constructor(data: any) {
      this.status = data?.status;
      this.detail = data?.detail;
  }
}


export class ApiValidationError extends ApiBaseError {
  static fromJS(data: any): ApiValidationError {
    return  new ApiValidationError(data);
  }
}
