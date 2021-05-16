import {Appointment, AppointmentHistory} from 'src/app/api/appointments/models';
import {SaveAppointmentRequest} from 'src/app/api/appointments/requests';
import {ApiListResult} from 'src/app/api/common/api-results';
import baseApiAxios from 'src/app/api/common/clients/base-api';
import baseModelRequest from 'src/app/api/common/clients/base-django-api';
import {appointmentHistoryParser, appointmentParser } from './parsers';

const adminUrl = 'admin/appointments/'
const userUrl = 'appointments/'

export const appointmentAdminClient = {
  ...baseModelRequest(adminUrl, appointmentParser),
  history (id: number): Promise<ApiListResult<AppointmentHistory>> {
    return baseApiAxios.get<ApiListResult<AppointmentHistory>>(adminUrl + `${id}/history/`)
      .then(project => {
          project.data.results = project.data.results.map(appointmentHistoryParser);
          return project.data;
        });
  },

  createLock(model: any): Promise<Appointment> {
    return baseApiAxios.post<Appointment>(adminUrl + 'lock/', model)
        .then(result => appointmentParser(result.data));
  },

  updateLock(id: number, model: SaveAppointmentRequest): Promise<Appointment> {
    return baseApiAxios.patch<Appointment>(adminUrl + `${id}/plock/`, model)
        .then(result => appointmentParser(result.data));
  }
}

export const appointmentClient = {
  ...baseModelRequest(userUrl, appointmentParser),
}
