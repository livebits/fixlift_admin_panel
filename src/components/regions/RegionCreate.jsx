import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput, translate } from 'react-admin';
import { required, minLength } from 'ra-core';

export const RegionCreate = props => (
    <Create title="ثبت منطقه جدید" {...props}>
        <SimpleForm>
            <TextInput label="عنوان" source="name" validate={required()}/>
            <LongTextInput label="توضیحات" source="description" />

        </SimpleForm>
    </Create>
);