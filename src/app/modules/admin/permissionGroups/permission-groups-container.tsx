import React from 'react';
import PermissionGroupUpsertForm from 'src/app/modules/admin/permissionGroups/permission-group-upsert-form';
import PermissionGroupsTable from 'src/app/modules/admin/permissionGroups/permission-groups-table';
import AdminDashboard from 'src/app/shared/admin/admin-dashboard';
import AdminListEditContainer from 'src/app/shared/admin/admin-list-edit-container';
import {permissionGroupActions, permissionGroupSelectors} from 'src/app/store/admin/permissionGroups';


const PermissionGroupsContainer: React.FunctionComponent = () => {
    return (
        <AdminDashboard>
            <AdminListEditContainer baseSelectors={permissionGroupSelectors}
                                    baseActions={permissionGroupActions}
                                    EditContainer={PermissionGroupUpsertForm}
                                    ListContainer={PermissionGroupsTable}/>
        </AdminDashboard>
    )
}


export default PermissionGroupsContainer;


