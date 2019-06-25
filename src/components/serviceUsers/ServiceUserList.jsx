import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, EmailField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, Filter, BooleanField,
      ReferenceInput } from 'react-admin';

export const ServiceUserList = props => (
    <List {...props} title='مدیریت سرویس کار ها' >

        <Datagrid rowClick='edit'>
            <TextField source='id' label='کد' />
            <TextField source='name' label='نام' />
            <TextField source='mobile' label='موبایل' />
            <BooleanField source='canUseApp' label='دسترسی به App' />
            <EditButton />
            <DeleteButton />
        </Datagrid>
        
    </List>
);