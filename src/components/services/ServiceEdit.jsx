import React from 'react';
import {
    ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
    ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
    ReferenceArrayInput, AutocompleteInput, Edit, ArrayInput
} from 'react-admin';
import { minLength, required } from 'ra-core';
import { CustomDateInput, CustomTimeInput } from '../CustomComponents/CustomDatePicker';

const Title = ({ record }) => {
    return <span> ویراش سرویس {record ? `"${record.id}"` : ''}</span>;
};

export const ServiceEdit = props => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <DisabledInput label="کد " source="id" />
            <ReferenceInput label="قرارداد" source="dealId" reference="deal-names" validate={required()}>
                <AutocompleteInput optionText={query => `${query.contractNumber} (نام ساختمان: ${query.buildingName})`} />
            </ReferenceInput>

            <ReferenceInput label="انتخاب سرویس کار" validate={required()} source="serviceUserId" reference="service-users">
                <AutocompleteInput optionText="name" />
            </ReferenceInput>

            <LongTextInput label="گزارش سرویسکار" source="serviceUserReport" />

            <CustomDateInput label="تاریخ سرویس" validate={required()} source="time" />
            <CustomDateInput label="تاریخ انجام سرویس" source="doneDate" />

            <CustomTimeInput label="زمان شروع" source="startTime" type="time" />
            <CustomTimeInput label="زمان پایان" source="finishTime" type="time" />

            <LongTextInput label="یادآوری سرویس بعد" source="serviceUserReminder" />
            <LongTextInput label="توضیحات مشتری" source="customerDescription" />

            <SelectInput source="status" label="وضعیت" optionText="name" choices={[
                { id: 'submitted', name: 'انجام نشده' },
                { id: 'done', name: 'انجام شده' },
            ]} />
        </SimpleForm>
    </Edit>
);