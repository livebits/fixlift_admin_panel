import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput, NumberInput,
     ReferenceArrayInput, SelectArrayInput, translate } from 'react-admin';
import { required, minLength } from 'ra-core';

const validateChecklistCreation = (values, props) => {
    const errors = {};
    if (!values.checklistCategoryId) {
        errors.checklistCategoryId = [props.translate('ra.validation.required')];
    }
    return errors
};

export const checklistCreate = props => (
    <Create title="ثبت چک لیست جدید" {...props}>
        <SimpleForm validate={validateChecklistCreation}>
            <TextInput label="عنوان" source="title" validate={required()}/>
            <NumberInput label="اولویت" source="priority" />
            <ReferenceInput label="دسته بندی" source="checklistCategoryId" reference="checklist-categories" >
                <SelectInput optionText="title"/>
            </ReferenceInput>

        </SimpleForm>
    </Create>
);