import {PermissionModels} from '../common/permissions';
import {IReadModel} from '../common/models/IReadModel';



// export class CompanyStripeDetails implements IReadModel {
//   static modelType = 'companyMessages';
//   name = '';
//   id: number;
//   detailsSubmitted: boolean;
//   chargesEnabled: boolean;
//   payoutsEnabled: boolean;
//   defaultCurrency: boolean;
//   requireConnect: boolean;
//   currentlyDue: string[];
//
//   static fromJs(data: any): CompanyStripeDetails {
//     data = typeof data === 'object' ? data : {};
//     const result = new CompanyStripeDetails();
//     if (data) {
//       result.id = data.ownerId;
//       result.detailsSubmitted = data.detailsSubmitted;
//       result.chargesEnabled = data.chargesEnabled;
//       result.payoutsEnabled = data.payoutsEnabled;
//       result.defaultCurrency = data.defaultCurrency;
//       result.currentlyDue = data.currentlyDue;
//       result.requireConnect = data.requireConnect;
//     }
//     return result;
//   }
//
//
// }
//
// @Injectable({
//   providedIn: 'root'
// })
// export class CompanyStripeDetailsAdapter implements Adapter<CompanyStripeDetails> {
//   adapt(data: any): CompanyStripeDetails {
//     return CompanyStripeDetails.fromJs(data);
//   }
// }

export class CompanyConfig implements IReadModel {
  static modelType = PermissionModels.company;
  name = '';
  ownerId = 0;
  private: boolean;
  preBookWarn = '';
  postBookMessage = '';
  postBookEmailMessage = '';
  appointmentReminderMessage = '';
  appointmentAcceptedMessage = '';
  appointmentRejectedMessage = '';
  allowCardPayment: boolean;
  allowUnpaidRequest: boolean;
  canReceiveCardPayments: boolean;
  canReceiveUnpaidRequest: boolean;

  get id() {
    return this.ownerId;
  }

  set id(v) {
    this.ownerId = v;
  }

  constructor(data: any) {
    this.ownerId = data.ownerId;
    this.private = data.private;
    this.preBookWarn = data.preBookWarn;
    this.postBookMessage = data.postBookMessage;
    this.postBookEmailMessage = data.postBookEmailMessage;
    this.appointmentReminderMessage = data.appointmentReminderMessage;
    this.appointmentAcceptedMessage = data.appointmentAcceptedMessage;
    this.appointmentRejectedMessage = data.appointmentRejectedMessage;
    this.allowCardPayment = data.allowCardPayment;
    this.allowUnpaidRequest = data.allowUnpaidRequest;
    this.canReceiveCardPayments = data.canReceiveCardPayments;
    this.canReceiveUnpaidRequest = data.canReceiveUnpaidRequest;
  }

  static fromJs(data: any): CompanyConfig {
    data = typeof data === 'object' ? data : {};
    return  new CompanyConfig(data);
  }
}

export interface IConfigWriteModel {
  ownerId: number;
  private: boolean;
  preBookWarn: string;
  postBookMessage: string;
  postBookEmailMessage: string;
  appointmentReminderMessage: string;
  appointmentAcceptedMessage: string;
  appointmentRejectedMessage: string;
  allowCardPayment: boolean;
  allowUnpaidRequest: boolean;
}
