import React from 'react';
import {
    ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
    ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput, NumberInput,
    ReferenceArrayInput, SelectArrayInput, BooleanInput
} from 'react-admin';
import { required, minLength } from 'ra-core';

export const LiftFieldCreate = props => (
    <Create title="ثبت فیلد جدید" {...props}>
        <SimpleForm>
            <TextInput label="عنوان" source="title" validate={required()} />
            <NumberInput label="اولویت" source="priority" />
            <SelectInput source="fieldType" validate={required()} label="نوع فیلد" choices={[
                { id: 'integer', name: 'عددی' },
                { id: 'string', name: 'متنی' },
            ]} />
            <ReferenceInput label="نوع دستگاه" source="liftFieldCategoryId" validate={required()} reference="lift-field-categories">
                <SelectInput optionText="title" />
            </ReferenceInput>

        </SimpleForm>
    </Create>
);