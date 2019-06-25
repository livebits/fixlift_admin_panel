// in src/users.js
import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, NumberInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput, Edit, ArrayInput } from 'react-admin';
import { minLength, required } from 'ra-core';

const validateChecklistCreation = (values, props) => {
    const errors = {};
    if (!values.checklistCategoryId) {
        errors.checklistCategoryId = [props.translate('ra.validation.required')];
    }
    return errors
};

const Title = ({ record }) => {
    return <span>ویراش {record ? `"${record.title}"` : ''}</span>;
};

export const checklistEdit = props => (
    <Edit title={<Title />} {...props}>
        <SimpleForm validate={validateChecklistCreation}>
            <DisabledInput label="کد " source="id" />
            <TextInput label="عنوان" source="title" validate={required()}/>
            <NumberInput label="اولویت" source="priority" />
            <ReferenceInput label="دسته بندی" source="checklistCategoryId" reference="checklist-categories" >
                <SelectInput optionText="title"/>
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);