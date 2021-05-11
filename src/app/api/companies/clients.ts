import {adaptList} from 'src/app/api/common/adapter';
import {SlotRequestParams} from 'src/app/api/companies/requests';
import {convertMoment} from '../common/helpers';
import {CompanyDetails, Slot} from './models';
import baseModelRequest from '../common/clients/base-django-api';
import {companyParser, companyDetailsParser, slotParser} from './parsers';
import baseApiAxios from 'src/app/api/common/clients/base-api';



const baseUrl = 'companies/';

export const companyClient = {
    ...baseModelRequest(baseUrl, companyParser),
    fromName: (name: string): Promise<CompanyDetails> => {
        return baseApiAxios.get<CompanyDetails>(baseUrl + name + '/')
            .then(result => companyDetailsParser(result.data));
    },

    slots: (slotsParams: SlotRequestParams): Promise<Slot[]> => {
        const params = convertMoment(slotsParams);
        return baseApiAxios.get<Slot[]>(baseUrl + 'slots/', {params})
            .then(result => adaptList(slotParser)(result.data));
    }
};
