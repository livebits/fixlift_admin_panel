// in src/users.js
import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput, Edit, ArrayInput } from 'react-admin';
import { minLength, required } from 'ra-core';

// const required = (message = 'ra.validation.required') =>
//     (value, allValues, props) => value ? undefined : props.translate(message);
// const minLength = (min, message = 'ra.validation.minLength') =>
//     (value, allValues, props) => value && value.length < min ? props.translate(message, {min: min}) : undefined;
 
const validateUserCreation = (values, props) => {
    const errors = {};
    if (!values.role) {
        errors.role = [props.translate('ra.validation.required')];
    }
    return errors
};
 
const validateName = [required()];
const validateUsername = [required()];
const validatePassword = [required(), minLength(6, 'ra.validation.minLength')];

const Title = ({ record }) => {
    return <span>ویراش {record ? `"${record.firstName} ${record.lastName}"` : ''}</span>;
};

export const UserEdit = props => (
    <Edit title={<Title />} {...props}>
        <SimpleForm validate={validateUserCreation}>
            <DisabledInput label="کد کاربر" source="id" />
            <TextInput label="نام" source="firstName" validate={validateName}/>
            <TextInput label="نام خانوادگی" source="lastName" />
            <TextInput label="ایمیل" source="email" type="email" />

            <ReferenceInput label="نقش" source="role" reference="roles" >
                <SelectInput optionText="name"/>
            </ReferenceInput>

            <TextInput label="نام کاربری" source="username" validate={validateUsername} />
        </SimpleForm>
    </Edit>
);