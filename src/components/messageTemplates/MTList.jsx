import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, EmailField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, Filter, BooleanField,
      ReferenceInput } from 'react-admin';

export const MTList = props => (
    <List {...props} title='تنظیمات قالب های پیامک ' >

        <Datagrid selectMode="single" selectMode="single" rowClick='edit'>
            <TextField source='id' label='کد' />
            <TextField source='title' label='نام قالب' />
            <TextField source='body' label='متن پیش فرض' />
            <BooleanField source='status' label=' وضعیت' />
            <EditButton />
            <DeleteButton />
        </Datagrid>
        
    </List>
);