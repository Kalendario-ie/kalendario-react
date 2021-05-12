import {personParser} from 'src/app/api/common/parsers';
import {Employee} from 'src/app/api/employees/models';


export function employeeParser(data: any): Employee {
    return  {
        ...data,
        ...personParser(data),
        private: !!data.private,
        // photoUrl: data.profileImg ? environment.imageStorage + data.profileImg
        //     : environment.assetUrl + 'img/default-avatar.jpg',
    }

}
