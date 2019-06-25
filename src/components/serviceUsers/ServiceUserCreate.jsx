import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, NumberInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput, translate, BooleanInput } from 'react-admin';
import { required, minLength } from 'ra-core';

export const ServiceUserCreate = props => (
    <Create title="ثبت سرویس کار جدید" {...props}>
        <SimpleForm>
            <TextInput label="نام" source="name" validate={required()}/>
            <TextInput label="موبایل" source="mobile" validate={required()}/>
            <TextInput label="موبایل 2" source="mobile2"/>
            <BooleanInput label="دسترسی به اپلیکیشن" source="canUseApp" />

        </SimpleForm>
    </Create>
);