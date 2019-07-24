import React from 'react';
import {
    ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
    ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
    ReferenceArrayInput, AutocompleteInput, Edit, ArrayInput
} from 'react-admin';
import { minLength, required } from 'ra-core';
import { CustomDateInput } from '../CustomComponents/CustomDatePicker';

const Title = ({ record }) => {
    return <span> ویراش امداد {record ? `"${record.id}"` : ''}</span>;
};

export const EmergencyEdit = props => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <DisabledInput label="کد " source="id" />
            
            <ReferenceInput label="قرارداد" source="dealId" reference="deal-names" validate={required()}>
                <AutocompleteInput optionText={query => `${query.contractNumber} (نام ساختمان: ${query.buildingName})`} />
            </ReferenceInput>

            <ReferenceInput label="انتخاب سرویس کار" validate={required()} source="serviceUserId" reference="service-users">
                <AutocompleteInput optionText="name" />
            </ReferenceInput>

            <CustomDateInput label="تاریخ امداد" validate={required()} source="time" />
            <CustomDateInput label="تاریخ انجام" source="doneTime" />

            <LongTextInput label="گزارش سرویس کار" source="serviceUserReport" />

            <SelectInput source="status" label="وضعیت" optionText="name" choices={[
                { id: 'submitted', name: 'انجام نشده' },
                { id: 'done', name: 'انجام شده' },
            ]} />
        </SimpleForm>
    </Edit>
);