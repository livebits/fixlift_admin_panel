// in src/users.js
import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput, Edit, ArrayInput, NumberInput } from 'react-admin';
import { minLength, required } from 'ra-core';

const Title = ({ record }) => {
    return <span>ویراش {record ? `"${record.name}"` : ''}</span>;
};

export const UnitEdit = props => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <DisabledInput label="کد " source="id" />
            <TextInput label="نام" source="name" validate={required()}/>
            <TextInput label="علامت اختصار" source="shortcut" validate={required()}/>
        </SimpleForm>
    </Edit>
);