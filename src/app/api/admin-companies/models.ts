export {}
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

