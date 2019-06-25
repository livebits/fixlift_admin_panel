// in src/users.js
import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput, Edit, ArrayInput } from 'react-admin';
import { minLength, required } from 'ra-core';

const Title = ({ record }) => {
    return <span>ویراش {record ? `"${record.name}"` : ''}</span>;
};

export const RegionEdit = props => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <DisabledInput label="کد " source="id" />
            <TextInput label="عنوان" source="name" validate={required()}/>
            <LongTextInput label="توضیحات" source="description" />
        </SimpleForm>
    </Edit>
);