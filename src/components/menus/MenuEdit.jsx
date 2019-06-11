// in src/users.js
import React from 'react';
import { ReferenceArrayField, NumberInput, SimpleFormIterator, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput, Edit, ArrayInput } from 'react-admin';

const Title = ({ record }) => {
    return <span>ویراش منو {record ? `"${record.name}"` : ''}</span>;
};
    

export const MenuEdit = props => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <TextInput source="name" label="عنوان منو" />
            <TextInput source="url" label="آدرس" />
            <NumberInput source="position" label="موقعیت"  />
            {/* <ArrayInput source="actions" label="عملیات قابل انجام" >
                <SimpleFormIterator>
                    <TextInput label=" " source="name" />
                </SimpleFormIterator>
            </ArrayInput> */}

            <ReferenceArrayInput label="عملیات قابل انجام" source="actions" reference="action">
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);