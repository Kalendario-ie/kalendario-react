import React from 'react';
import { IReadModel } from "src/app/api/common/models";
import {Customer} from 'src/app/api/customers';

export interface AdminEditContainerProps {
    entity: IReadModel;
    onSubmit: (values: any) => void;
    onCancel: () => void;
}

export interface AdminTableContainerProps {
    entities: IReadModel[];
    buttons: (customer: Customer) => React.ReactNode;
    filter?: (value: string | undefined) => void;
}
