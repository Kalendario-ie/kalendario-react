import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {AdminCompany, adminCompanyClient} from 'src/app/api/admin-companies';
import {ApiValidationError} from 'src/app/api/common/api-errors';
import {CompanyConfig} from 'src/app/api/company-config/models';
import Settings from 'src/app/modules/admin/settings/settings';
import SettingsForm from 'src/app/modules/admin/settings/settings-form';
import {KButton} from 'src/app/shared/components/primitives';
import {selectUser} from 'src/app/store/auth';

interface SettingsContainerProps {
}

const SettingsContainer: React.FunctionComponent<SettingsContainerProps> = () => {
    const user = useSelector(selectUser);
    const [company, setCompany] = useState<AdminCompany | null>(null);
    const [apiError, setApiError] = useState<ApiValidationError | null>(null);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (user?.company?.id) {
            adminCompanyClient.detail(user.company.id)
                .then(res => setCompany(res));
        }
    }, [user])

    const onSubmit = (companyConfig: CompanyConfig) => {
        company &&
        adminCompanyClient.config(company.id, companyConfig)
            .then(res => setCompany({...company, config: res}))
            .catch(error => setApiError(error));
    }

    return (
        <>
            {company &&
            <>
                {editMode && <SettingsForm company={company}
                                           apiError={apiError}
                                           onSubmit={onSubmit}
                                           onCancel={() => setEditMode(false)}/>}

                {!editMode && (
                    <>
                        <KButton color={'primary'} onClick={() => setEditMode(true)}>Edit</KButton>
                        <Settings company={company}/>
                    </>
                )}

            </>
            }
        </>
    )
}

export default SettingsContainer;
