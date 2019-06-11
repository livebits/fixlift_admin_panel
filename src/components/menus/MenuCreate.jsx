// in src/users.js
import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput } from 'react-admin';

export const MenuCreate = props => (
    <Create title="ثبت منو" {...props} redirect="/">
        <SimpleForm>
            <TextInput label="عنوان منو" source="name" />
            <TextInput label="آدرس" source="url" />
            <TextInput label="موقعیت" source="position" />

            <ReferenceArrayInput label="عملیات قابل انجام" source="actions" reference="action">
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);