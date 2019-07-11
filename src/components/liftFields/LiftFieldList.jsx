import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, EmailField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, BooleanField, SelectInput,
      ReferenceInput } from 'react-admin';

export const LiftFieldList = props => (
    <List {...props} title=' فیلدهای آسانسور' >

        <Datagrid rowClick='edit'>
            <TextField source='id' label='کد' />
            <TextField source='title' label='عنوان' />
            <TextField source='priority' label='اولویت' />
            {/* <BooleanField source='status' label='وضعیت' /> */}
            <ReferenceField label="دسته بندی" source="liftFieldCategoryId" reference="lift-field-categories">
                <TextField source="title" />
            </ReferenceField>
            <EditButton />
            <DeleteButton />
        </Datagrid>
        
    </List>
);