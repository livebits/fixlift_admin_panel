import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, EmailField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, BooleanField, SelectInput,
      ReferenceInput } from 'react-admin';

export const liftFieldCategoryList = props => (
    <List {...props} title=' دسته بندی قطعات آسانسور' >

        <Datagrid rowClick='edit'>
            <TextField source='id' label='کد' />
            <TextField source='title' label='عنوان' />
            <TextField source='priority' label='اولویت' />
            {/* <BooleanField source='status' label='وضعیت' /> */}
            <ReferenceField label="نوع دستگاه" source="deviceTypeId" reference="device-types">
                <TextField source="title" />
            </ReferenceField>
            <EditButton />
            <DeleteButton />
        </Datagrid>
        
    </List>
);