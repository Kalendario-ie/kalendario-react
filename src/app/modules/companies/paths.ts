import {CompanyDetails} from 'src/app/api/companies';


export const companiesUrls = (company: CompanyDetails) => {
    return {
        index: `/c/${company.name}`,
        cart: `/c/${company.name}/cart`,
        book: `/c/${company.name}/book`,
        checkout: `/c/${company.name}/checkout`,
    }
}
