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

            <ReferenceInput label="قرارداد" source="dealId" reference="deals" validate={required()}>
                <AutocompleteInput optionText={query => `${query.contract_number} (${query.building_name})`} />
            </ReferenceInput>

            <ReferenceInput label="انتخاب سرویس کار" validate={required()} source="serviceUserId" reference="service-users">
                <AutocompleteInput optionText="name" />
            </ReferenceInput>

            <CustomDateInput label="تاریخ سرویس" validate={required()} source="time" />

        </SimpleForm>
    </Create>
);