// in src/users.js
import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, NumberInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput, Edit, ArrayInput } from 'react-admin';
import { minLength, required } from 'ra-core';

const Title = ({ record }) => {
    return <span>ویراش {record ? `"${record.title}"` : ''}</span>;
};

export const checklistCategoryEdit = props => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <DisabledInput label="کد " source="id" />
            <TextInput label="عنوان" source="title" validate={required()}/>
            <NumberInput label="اولویت" source="priority" />
        </SimpleForm>
    </Edit>
);