import {personParser} from 'src/app/api/common/parsers';
import {Employee} from 'src/app/api/employees/models';

const imageStorage = process.env.REACT_APP_IMAGE_API_URL;

export function employeeParser(data?: any): Employee {
    return data ? {
        ...data,
        ...personParser(data),
        private: !!data.private,
        photoUrl: data.profileImg ? imageStorage + data.profileImg
            : 'img/default-avatar.jpg',
    } : {
        ...personParser(),
        private: false,
        photoUrl: null,
        instagram: '',
        schedule: 0,
        services: [],
    }

}
