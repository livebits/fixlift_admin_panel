import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, EmailField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, Filter, SelectInput,
      ReferenceInput } from 'react-admin';

export const SegmentList = props => (
    <List {...props} title='مدیریت قطعات' >

        <Datagrid rowClick='edit'>
            <TextField source='id' label='کد' />
            <TextField source='name' label='نام' />
            <TextField source='country' label='کشور سازنده' />
            <TextField source='brand' label='برند' />
            <TextField source='price' label='قیمت' />
            <EditButton />
            <DeleteButton />
        </Datagrid>
        
    </List>
);