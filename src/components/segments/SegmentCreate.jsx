import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, NumberInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput, translate } from 'react-admin';
import { required, minLength } from 'ra-core';

export const SegmentCreate = props => (
    <Create title="ثبت قطعه جدید" {...props}>
        <SimpleForm>
            <TextInput label="عنوان" source="name" validate={required()}/>
            <TextInput label="کشور سازنده" source="country"/>
            <TextInput label="برند" source="brand"/>
            <NumberInput label="قیمت" source="price"/>

        </SimpleForm>
    </Create>
);