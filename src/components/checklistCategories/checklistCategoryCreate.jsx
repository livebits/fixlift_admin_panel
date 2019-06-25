import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput, NumberInput,
     ReferenceArrayInput, SelectArrayInput, translate } from 'react-admin';
import { required, minLength } from 'ra-core';

export const checklistCategoryCreate = props => (
    <Create title="ثبت دسته بندی جدید" {...props}>
        <SimpleForm>
            <TextInput label="عنوان" source="title" validate={required()}/>
            <NumberInput label="اولویت" source="priority" />

        </SimpleForm>
    </Create>
);