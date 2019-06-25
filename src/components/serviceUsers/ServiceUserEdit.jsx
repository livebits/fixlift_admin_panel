// in src/users.js
import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput, Edit, ArrayInput, BooleanInput } from 'react-admin';
import { minLength, required } from 'ra-core';

const Title = ({ record }) => {
    return <span>ویراش {record ? `"${record.name}"` : ''}</span>;
};

export const ServiceUserEdit = props => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <DisabledInput label="کد " source="id" />
            <TextInput label="نام" source="name" validate={required()}/>
            <TextInput label="موبایل" source="mobile" validate={required()}/>
            <TextInput label="موبایل 2" source="mobile2"/>
            <BooleanInput label="دسترسی به اپلیکیشن" source="canUseApp" />
        </SimpleForm>
    </Edit>
);