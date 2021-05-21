import {adminServiceCategoryClient, ServiceCategory} from 'src/app/api/services';
import {kCreateBaseStore} from 'src/app/store/admin/common/adapter';

const storeName = 'adminServiceCategories';

const {
    actions,
    adapter,
    reducer,
    sagas,
    selectors
} = kCreateBaseStore<ServiceCategory>(storeName, adminServiceCategoryClient, (state) => state.adminServiceCategories);

export {reducer as serviceCategoriesReducer}
export {actions as serviceCategoriesActions}
export {adapter as serviceCategoriesAdapter}
export {selectors as serviceCategoriesSelectors}
export {sagas as adminServiceCategorySaga}

