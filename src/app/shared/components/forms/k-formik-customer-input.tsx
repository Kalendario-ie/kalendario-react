import {useFormikContext} from 'formik';
import React, {useEffect, useState} from 'react';
import AsyncSelect from 'react-select/async';
import {FormGroup, Label} from 'reactstrap';
import {adminCustomerClient, Customer} from 'src/app/api/customers';
import CustomerUpsertForm from 'src/app/modules/admin/customers/customer-upsert-form';
import {useEditModal} from 'src/app/shared/admin/hooks';
import {KFlexColumn, KFlexRow} from 'src/app/shared/components/flex';
import {KIconButton} from 'src/app/shared/components/primitives/buttons';
import KIcon from 'src/app/shared/components/primitives/k-icon';
import {customerActions, customerSelectors} from 'src/app/store/admin/customers';

interface FormikCustomerInput {
    initialCustomer: Customer | null;
}

export const KFormikCustomerInput: React.FunctionComponent<FormikCustomerInput> = ({initialCustomer}) => {
    const [customer, setCustomer] = useState<Customer | null>(initialCustomer);
    const [openModal, modal, createdCustomer] = useEditModal(customerSelectors, customerActions, CustomerUpsertForm);
    const formik = useFormikContext();
    const {setValue} = formik.getFieldHelpers('customer');

    useEffect(() => {
        if (createdCustomer) {
            setCustomer(createdCustomer);
            setValue(createdCustomer.id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [createdCustomer]);

    const promiseOptions = (value: string) => adminCustomerClient.get({search: value}).then(res => res.results);

    const navigateToPage = (selectedCustomer: Customer | null) => {
        setCustomer(selectedCustomer);
        setValue(selectedCustomer?.id || null);
    }


    return (
        <FormGroup>
            {modal}
            <Label>Customer</Label>
            <FormGroup>
                <KFlexRow align={'center'}>
                    <AsyncSelect className={"flex-fill"}
                                 cacheOptions
                                 defaultOptions
                                 backspaceRemovesValue
                                 defaultInputValue={initialCustomer?.name}
                                 getOptionValue={(option) => option.id.toString()}
                                 getOptionLabel={(option) => option.name}
                                 formatOptionLabel={(option) =>
                                     <KFlexColumn justify={'between'} className={option.warning ? 'bg-danger' : ''}>
                                         <span className="font-bold">{option.name}</span> {option.email}
                                     </KFlexColumn>
                                 }
                                 onChange={navigateToPage}
                                 loadOptions={promiseOptions}/>
                    <KIconButton color="primary" icon={'plus'} onClick={openModal(null)}/>
                </KFlexRow>
            </FormGroup>

            {customer &&
            <KFlexColumn>
                <KFlexRow justify={'between'}>
                    <KFlexRow className={"mb-2"} align={'center'}>
                        <KIcon margin={2} color="primary" icon={'user'}/>
                        {customer.name}
                    </KFlexRow>
                    <KFlexRow align={'center'}>
                        <KIcon margin={2} color="primary" icon={'phone'}/>
                        {customer.phone}
                    </KFlexRow>
                </KFlexRow>
                <KFlexRow align={'center'}>
                    <KIcon margin={2} color="primary" icon={'at'}/>
                    {customer.email}
                </KFlexRow>
            </KFlexColumn>
            }
        </FormGroup>
    )
}
