import React from 'react';
import {
    ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
    ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
    ReferenceArrayInput, SelectArrayInput, AutocompleteInput
} from 'react-admin';
import { required, minLength } from 'ra-core';
import { CustomDateInput } from '../CustomComponents/CustomDatePicker';

export const ServiceCreate = props => (
    <Create title="ثبت سرویس جدید" {...props}>
        <SimpleForm>

            <ReferenceInput label="قرارداد" source="dealId" reference="deal-names" validate={required()}>
                <AutocompleteInput optionText={query => `${query.contractNumber} (نام ساختمان: ${query.buildingName})`} />
            </ReferenceInput>

            <ReferenceInput label="انتخاب سرویس کار" validate={required()} source="serviceUserId" reference="service-users">
                <AutocompleteInput optionText={query => `${query.name} (موبایل: ${query.mobile})`} />
            </ReferenceInput>

            <CustomDateInput label="تاریخ سرویس" validate={required()} source="time" />

        </SimpleForm>
    </Create>
);