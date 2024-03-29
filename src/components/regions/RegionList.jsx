import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, EmailField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, Filter, SelectInput,
      ReferenceInput } from 'react-admin';

export const RegionList = props => (
    <List {...props} title='مدیریت منطقه ها' >

        <Datagrid rowClick='edit'>
            <TextField source='id' label='کد' />
            <TextField source='name' label='نام منطقه' />
            <EditButton />
            <DeleteButton />
        </Datagrid>
        
    </List>
);