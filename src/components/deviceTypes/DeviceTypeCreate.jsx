import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput, translate } from 'react-admin';
import { required, minLength } from 'ra-core';

export const DeviceTypeCreate = props => (
    <Create title="ثبت نوع دستگاه جدید" {...props}>
        <SimpleForm>
            <TextInput label="عنوان" source="title" validate={required()}/>

        </SimpleForm>
    </Create>
);