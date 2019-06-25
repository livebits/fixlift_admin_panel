import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, NumberInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput, translate } from 'react-admin';
import { required, minLength } from 'ra-core';

export const UnitCreate = props => (
    <Create title="ثبت واحد جدید" {...props}>
        <SimpleForm>
            <TextInput label="نام" source="name" validate={required()}/>
            <TextInput label="علامت اختصار" source="shortcut" validate={required()}/>

        </SimpleForm>
    </Create>
);