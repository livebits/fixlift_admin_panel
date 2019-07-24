import React from 'react';
import {
    ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
    ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
    ReferenceArrayInput, SelectArrayInput, AutocompleteInput
} from 'react-admin';
import { required, minLength } from 'ra-core';
import { CustomDateInput } from '../CustomComponents/CustomDatePicker';

export const EmergencyCreate = props => (
    <Create title="ثبت امداد جدید" {...props}>
        <SimpleForm>

        <ReferenceInput label="قرارداد" source="dealId" reference="deal-names" validate={required()}>
                <AutocompleteInput optionText={query => `${query.contractNumber} (نام ساختمان: ${query.buildingName})`} />
            </ReferenceInput>

            <ReferenceInput label="انتخاب سرویس کار" validate={required()} source="serviceUserId" reference="service-users">
                <AutocompleteInput optionText="name" />
            </ReferenceInput>

            <CustomDateInput label="تاریخ امداد" validate={required()} source="time" />

        </SimpleForm>
    </Create>
);