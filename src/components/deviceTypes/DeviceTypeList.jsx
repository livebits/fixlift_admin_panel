import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, EmailField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, Filter, SelectInput,
      ReferenceInput } from 'react-admin';

export const DeviceTypeList = props => (
    <List {...props} title='انواع دستگاه ها' >

        <Datagrid rowClick='edit'>
            <TextField source='id' label='کد' />
            <TextField source='title' label='نام ' />
            <EditButton />
            <DeleteButton />
        </Datagrid>
        
    </List>
);